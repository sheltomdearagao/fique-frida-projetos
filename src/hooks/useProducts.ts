
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  image_url: string | null;
  youtube_unlisted_url: string | null;
  pdf_url: string | null;
  created_at: string;
}

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log('Carregando produtos do Supabase...');
      const { data, error } = await supabase
        .from('products')
        .select('id, name, description, price, created_at')
        .order('created_at', { ascending: true });
      
      if (error) {
        console.error('Erro ao carregar produtos:', error);
        throw error;
      }
      
      console.log('Produtos carregados:', data);
      
      // Mapear os dados para incluir campos que não existem ainda na tabela
      const productsWithDefaults = data.map(product => ({
        ...product,
        image_url: getDefaultImageForProduct(product.name),
        youtube_unlisted_url: null,
        pdf_url: null
      }));
      
      return productsWithDefaults as Product[];
    },
    staleTime: 5 * 60 * 1000, // Cache por 5 minutos
  });
};

// Função auxiliar para imagens padrão
function getDefaultImageForProduct(name: string): string {
  const imageMap: { [key: string]: string } = {
    'Mochila Urban Style': "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
    'Pochete Vintage': "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80",
    'Necessaire Floral': "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=400&q=80",
    'Shoulder Bag Elegante': "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80"
  };
  
  return imageMap[name] || "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80";
}
