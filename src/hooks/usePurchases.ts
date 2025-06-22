
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const usePurchases = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const createPurchase = useMutation({
    mutationFn: async ({ productId, userEmail }: { productId: string; userEmail: string }) => {
      console.log('Criando compra para produto:', productId, 'Email:', userEmail);
      
      // Para teste, vamos simular uma compra sem autenticação real
      // Em produção, você precisaria de autenticação adequada
      const mockUserId = '00000000-0000-0000-0000-000000000000';
      
      const { data, error } = await supabase
        .from('purchases')
        .insert([
          { 
            product_id: productId,
            user_id: mockUserId
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Erro ao criar compra:', error);
        throw error;
      }

      console.log('Compra criada com sucesso:', data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['purchases'] });
      toast({
        title: "✅ Compra realizada com sucesso!",
        description: "Você receberá os moldes por email e o acesso à aula será liberado.",
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
