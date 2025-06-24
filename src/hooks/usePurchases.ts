
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const usePurchases = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const createPurchase = useMutation({
    mutationFn: async ({ productId }: { productId: string }) => {
      console.log('Criando compra para produto:', productId);
      
      // Get the current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('Usuário não autenticado');
      }

      const { data, error } = await supabase
        .from('user_purchases')
        .insert({
          product_id: productId,
          user_id: user.id
        })
        .select()
        .single();

      if (error) {
        console.error('Erro ao criar compra:', error);
        throw error;
      }

      console.log('Compra criada:', data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-purchases'] });
      toast({
        title: "✅ Compra realizada com sucesso!",
        description: "Você agora tem acesso ao conteúdo deste produto.",
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
