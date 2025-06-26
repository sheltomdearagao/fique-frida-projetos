import { supabase } from '../integrations/supabase';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types/product'; // Assumindo que você tem um tipo Product

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('id, name, description, price, youtube_video_id, image_urls') // CORREÇÃO APLICADA AQUI
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Erro ao carregar produtos:', error);
        throw new Error('Erro ao carregar produtos');
      }
      
      return data;
    },
    staleTime: 5 * 60 * 1000, // Cache de 5 minutos
  });
};
