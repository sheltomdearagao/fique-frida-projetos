
-- Add missing columns to products table
ALTER TABLE public.products 
ADD COLUMN IF NOT EXISTS image_url TEXT,
ADD COLUMN IF NOT EXISTS youtube_unlisted_url TEXT,
ADD COLUMN IF NOT EXISTS pdf_url TEXT;

-- Create user_purchases table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.user_purchases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable RLS on user_purchases if not already enabled
ALTER TABLE public.user_purchases ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_purchases
DROP POLICY IF EXISTS "Permitir que usuários vejam suas próprias compras" ON public.user_purchases;
CREATE POLICY "Permitir que usuários vejam suas próprias compras" 
  ON public.user_purchases 
  FOR SELECT 
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Permitir que usuários criem suas próprias compras" ON public.user_purchases;
CREATE POLICY "Permitir que usuários criem suas próprias compras" 
  ON public.user_purchases 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create or replace the RPC function
CREATE OR REPLACE FUNCTION public.get_product_content(product_id_input UUID)
RETURNS TABLE(youtube_unlisted_url TEXT, pdf_url TEXT)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Check if user has purchased the product
  IF EXISTS (
    SELECT 1 
    FROM public.user_purchases 
    WHERE user_id = auth.uid() 
    AND product_id = product_id_input
  ) THEN
    -- Return the protected content
    RETURN QUERY 
    SELECT p.youtube_unlisted_url, p.pdf_url
    FROM public.products p
    WHERE p.id = product_id_input;
  ELSE
    -- Return empty result if user hasn't purchased
    RETURN;
  END IF;
END;
$$;

-- Update existing products with placeholder data
UPDATE public.products SET 
  image_url = CASE 
    WHEN name = 'Mochila Urban Style' THEN 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80'
    WHEN name = 'Pochete Vintage' THEN 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80'
    WHEN name = 'Necessaire Floral' THEN 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=400&q=80'
    WHEN name = 'Shoulder Bag Elegante' THEN 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80'
    ELSE 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80'
  END,
  youtube_unlisted_url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  pdf_url = 'pdfs/' || LOWER(REPLACE(name, ' ', '-')) || '.pdf'
WHERE image_url IS NULL OR youtube_unlisted_url IS NULL OR pdf_url IS NULL;

-- Insert placeholder products if table is empty (including youtube_video_id)
INSERT INTO public.products (name, description, price, youtube_video_id, image_url, youtube_unlisted_url, pdf_url)
SELECT * FROM (VALUES 
  ('Produto A', 'Molde digital exclusivo para criação de bolsas modernas', 29.90, 'dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'pdfs/produto-a.pdf'),
  ('Produto B', 'Tutorial completo de costura com técnicas avançadas', 39.90, 'dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'pdfs/produto-b.pdf'),
  ('Produto C', 'Kit de moldes para acessórios femininos', 49.90, 'dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=400&q=80', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'pdfs/produto-c.pdf')
) AS v(name, description, price, youtube_video_id, image_url, youtube_unlisted_url, pdf_url)
WHERE NOT EXISTS (SELECT 1 FROM public.products WHERE name IN ('Produto A', 'Produto B', 'Produto C'));
