
-- Remove os produtos fictícios existentes
DELETE FROM public.products WHERE name IN ('Produto A', 'Produto B', 'Produto C');

-- Insere os novos produtos reais
INSERT INTO public.products (name, description, price, youtube_video_id, image_url, youtube_unlisted_url, pdf_url) VALUES 
(
  'Pochete Dona Frida',
  'Obrigada por adquirir este projeto pago. Desejo que ela faça muito sucesso no seu ateliê.',
  25.90,
  '4dtZRqS6yu4',
  '/lovable-uploads/999128da-01f3-4bad-abb6-b71e81832e46.png',
  'https://www.youtube.com/watch?v=4dtZRqS6yu4',
  'pdfs/pochete-dona-frida.pdf'
),
(
  'Projeto Carteira Sol',
  'Arrasa na produção por aí! 😘🥰😊 Instagram: @fiquefrida',
  25.90,
  'Wl7bok5Dgzs',
  '/lovable-uploads/999128da-01f3-4bad-abb6-b71e81832e46.png',
  'https://www.youtube.com/watch?v=Wl7bok5Dgzs',
  'pdfs/projeto-carteira-sol.pdf'
),
(
  'Projeto Shoulder bag',
  'Instagram: @fiquefrida',
  25.90,
  '-DTss2Y3OF0',
  '/lovable-uploads/999128da-01f3-4bad-abb6-b71e81832e46.png',
  'https://www.youtube.com/watch?v=-DTss2Y3OF0',
  'pdfs/projeto-shoulder-bag.pdf'
);
