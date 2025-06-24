
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
      
      // Como a tabela user_purchases ainda não existe, vamos retornar um array vazio
      // Isso evitará erros enquanto a estrutura não estiver completa
      console.log('Tabela user_purchases ainda não disponível - retornando array vazio');
      return [] as UserPurchase[];
    },
    staleTime: 5 * 60 * 1000,
  });
};
