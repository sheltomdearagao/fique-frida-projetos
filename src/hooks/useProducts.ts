
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  image_urls: string[] | null;
  youtube_unlisted_url: string | null;
  pdf_url: string | null;
  youtube_video_id: string;
  created_at: string;
}

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log('Carregando produtos do Supabase...');
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) {
        console.error('Erro ao carregar produtos:', error);
        throw error;
      }
      
      console.log('Produtos carregados:', data);
      
      // Transformar os dados para garantir que image_urls seja um array
      const transformedData = data.map(product => ({
        ...product,
        // Se o produto tem image_url (singular), converte para image_urls (array)
        // Se já tem image_urls (array), mantém
        image_urls: product.image_urls 
          ? (Array.isArray(product.image_urls) ? product.image_urls : [product.image_urls])
          : (product.image_url ? [product.image_url] : [])
      }));
      
      return transformedData as Product[];
    },
    staleTime: 5 * 60 * 1000,
  });
};
