import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../integrations/supabase'; // CAMINHO CORRIGIDO
import Header from '../components/Header'; // CAMINHO CORRIGIDO

type ProdutoType = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_urls: string[];
};

export default function Produto() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<ProdutoType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imagemSelecionada, setImagemSelecionada] = useState<string>('');

  useEffect(() => {
    const fetchProduto = async () => {
      if (!id) return;
      setIsLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('id, name, description, price, image_urls')
        .eq('id', id)
        .single();

      if (error) {
        setError('Não foi possível carregar o produto.');
        console.error(error);
      } else {
        setProduto(data);
        if (data && data.image_urls && data.image_urls.length > 0) {
          setImagemSelecionada(data.image_urls[0]);
        }
      }
      setIsLoading(false);
    };
    fetchProduto();
  }, [id]);

  if (isLoading) return <div className="text-center p-10">Carregando...</div>;
  if (error || !produto) return <div className="text-center p-10 text-red-500">{error || 'Produto não encontrado.'}</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              {imagemSelecionada && (
                <img
                  src={imagemSelecionada}
                  alt={`Imagem principal do produto ${produto.name}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {produto.image_urls.map((url, index) => (
                <div
                  key={index}
                  onClick={() => setImagemSelecionada(url)}
                  className={`w-full aspect-square rounded-md overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                    imagemSelecionada === url ? 'border-frida-red scale-105' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={url} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
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
