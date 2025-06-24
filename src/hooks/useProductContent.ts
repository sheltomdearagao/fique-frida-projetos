
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ProductContent {
  youtube_unlisted_url: string;
  pdf_url: string;
}

export const useProductContent = (productId: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['product-content', productId],
    queryFn: async () => {
      console.log('Buscando conteúdo protegido do produto:', productId);
      
      const { data, error } = await supabase.rpc('get_product_content', {
        product_id_input: productId
      });

      if (error) {
        console.error('Erro ao buscar conteúdo:', error);
        throw error;
      }

      console.log('Conteúdo retornado:', data);
      
      if (!data || data.length === 0) {
        return null;
      }

      return data[0] as ProductContent;
    },
    enabled: enabled && !!productId,
    staleTime: 10 * 60 * 1000, // Cache por 10 minutos
  });
};
