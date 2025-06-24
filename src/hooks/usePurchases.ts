
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const usePurchases = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const createPurchase = useMutation({
    mutationFn: async ({ productId, userEmail }: { productId: string; userEmail: string }) => {
      console.log('Simulando criação de compra para produto:', productId, 'Email:', userEmail);
      
      // Como a tabela user_purchases ainda não existe, vamos simular uma compra bem-sucedida
      const mockPurchase = {
        id: crypto.randomUUID(),
        product_id: productId,
        user_id: '00000000-0000-0000-0000-000000000000',
        created_at: new Date().toISOString()
      };

      console.log('Compra simulada criada:', mockPurchase);
      return mockPurchase;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-purchases'] });
      toast({
        title: "✅ Compra realizada com sucesso!",
        description: "Você receberá os moldes por email e o acesso à aula será liberado em breve.",
        duration: 5000,
        className: "bg-white border-2 border-frida-green shadow-lg",
      });
    },
    onError: (error) => {
      console.error('Erro na compra:', error);
      toast({
        title: "❌ Erro na compra",
        description: "Houve um erro ao processar sua compra. Tente novamente.",
        duration: 5000,
        className: "bg-white border-2 border-red-500 shadow-lg",
      });
    }
  });

  return { createPurchase };
};
