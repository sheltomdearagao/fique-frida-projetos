
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface UserPurchase {
  id: string;
  user_id: string;
  product_id: string;
  created_at: string;
}

export const useUserPurchases = () => {
  return useQuery({
    queryKey: ['user-purchases'],
    queryFn: async () => {
      console.log('Carregando compras do usuário...');
      const { data, error } = await supabase
        .from('user_purchases')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Erro ao carregar compras:', error);
        throw error;
      }
      
      console.log('Compras carregadas:', data);
      return data as UserPurchase[];
    },
    staleTime: 5 * 60 * 1000,
  });
};
