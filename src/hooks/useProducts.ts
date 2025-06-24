
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  youtube_video_id: string;
  created_at: string;
}

// Dados mockados como fallback
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Mochila Urban Style",
    description: "Mochila moderna e funcional, perfeita para o dia a dia urbano",
    price: 89.90,
    youtube_video_id: "dQw4w9WgXcQ",
    created_at: new Date().toISOString()
  },
  {
    id: "2", 
    name: "Pochete Vintage",
    description: "Pochete retrô com estilo único e acabamento impecável",
    price: 45.50,
    youtube_video_id: "dQw4w9WgXcQ",
    created_at: new Date().toISOString()
  },
  {
    id: "3",
    name: "Necessaire Floral",
    description: "Necessaire delicada com estampas florais exclusivas",
    price: 32.80,
    youtube_video_id: "dQw4w9WgXcQ", 
    created_at: new Date().toISOString()
  },
  {
    id: "4",
    name: "Shoulder Bag Elegante", 
    description: "Bolsa tiracolo sofisticada para ocasiões especiais",
    price: 125.00,
    youtube_video_id: "dQw4w9WgXcQ",
    created_at: new Date().toISOString()
  }
];

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: true });
        
        if (error) throw error;
        return data as Product[];
      } catch (error) {
        console.warn('Falha ao conectar com Supabase, usando dados mockados:', error);
        // Retorna dados mockados como fallback
        return mockProducts;
      }
    },
  });
};
