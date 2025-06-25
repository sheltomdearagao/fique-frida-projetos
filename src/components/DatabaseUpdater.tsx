
import { useState } from 'react';
import { updateProductImages } from '@/scripts/updateProductImages';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function DatabaseUpdater() {
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  const handleUpdateDatabase = async () => {
    setIsUpdating(true);
    
    try {
      await updateProductImages();
      toast({
        title: "✅ Atualização concluída!",
        description: "As imagens dos produtos foram atualizadas no banco de dados.",
        duration: 5000,
      });
    } catch (error) {
      console.error('Erro na atualização:', error);
      toast({
        title: "❌ Erro na atualização",
        description: "Ocorreu um erro ao atualizar o banco de dados. Verifique o console.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border">
      <h3 className="text-lg font-bold text-frida-blue mb-2">
        🛠️ Atualizador do Banco
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Clique para atualizar as imagens dos produtos no Supabase
      </p>
      <Button 
        onClick={handleUpdateDatabase}
        disabled={isUpdating}
        className="w-full bg-frida-green hover:bg-frida-green/90"
      >
        {isUpdating ? '⏳ Atualizando...' : '🚀 Executar Script'}
      </Button>
    </div>
  );
}
