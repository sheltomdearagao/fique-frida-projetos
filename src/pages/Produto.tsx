
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import Header from '../components/Header';

// Definindo um tipo para o nosso produto para mais segurança
type Produto = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
};

export default function Produto() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduto = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('id, name, description, price, image_url')
        .eq('id', id)
        .single();

      if (error) {
        setError('Não foi possível carregar o produto.');
        console.error(error);
      } else {
        setProduto(data);
      }
      setIsLoading(false);
    };

    if (id) {
      fetchProduto();
    }
  }, [id]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error || !produto) {
    return <div>{error || 'Produto não encontrado.'}</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Imagem do Produto */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              {produto.image_url && (
                <img
                  src={produto.image_url}
                  alt={`Imagem do produto ${produto.name}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Informações do Produto (lado direito) */}
          <div className="flex flex-col">
            <h1 className="font-display text-3xl md:text-4xl text-frida-blue font-bold mb-4">{produto.name}</h1>
            <p className="text-frida-dark/80 mb-6">{produto.description}</p>
            <div className="text-3xl font-bold text-frida-green mb-6">
              R$ {produto.price?.toFixed(2).replace('.', ',')}
            </div>
            <button className="w-full bg-frida-red text-white py-3 rounded-lg font-bold hover:bg-frida-orange transition-all duration-300">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
