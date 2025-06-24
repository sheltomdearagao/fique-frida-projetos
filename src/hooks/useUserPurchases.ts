
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface UserPurchase {
  id: string;
  product_id: string;
  created_at: string;
  product: {
    id: string;
    name: string;
    description: string | null;
    image_url: string | null;
    price: number | null;
  };
}

export const useUserPurchases = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ['user-purchases'],
    queryFn: async () => {
      console.log('Carregando compras do usuário...');
      const { data, error } = await supabase
        .from('user_purchases')
        .select(`
          id,
          product_id,
          created_at,
          products (
            id,
            name,
            description,
            image_url,
            price
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao carregar compras:', error);
        throw error;
      }

      console.log('Compras carregadas:', data);
      
      // Transformar a estrutura para ficar mais fácil de usar
      return data.map(purchase => ({
        id: purchase.id,
        product_id: purchase.product_id,
        created_at: purchase.created_at,
        product: purchase.products
      })) as UserPurchase[];
    },
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000,
  });
};
