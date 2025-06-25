// src/pages/Produto.tsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient'; // Ajuste o caminho se necessário
import Header from '@/components/Header'; // Supondo que você use o Header aqui

// Definindo um tipo para o nosso produto para mais segurança
type Produto = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_urls: string[];
  // Adicione outros campos que seu produto tenha
};

export default function Produto() {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL
  const [produto, setProduto] = useState<Produto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- LÓGICA DA GALERIA ---
  // Este estado vai guardar a URL da imagem que está em destaque no momento.
  const [imagemSelecionada, setImagemSelecionada] = useState<string>('');

  useEffect(() => {
    const fetchProduto = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('id, name, description, price, image_urls')
        .eq('id', id)
        .single(); // .single() para pegar apenas um resultado

      if (error) {
        setError('Não foi possível carregar o produto.');
        console.error(error);
      } else {
        setProduto(data);
        // --- LÓGICA DA GALERIA ---
        // Quando os dados chegam, definimos a PRIMEIRA imagem da lista
        // como a imagem principal a ser exibida inicialmente.
        if (data && data.image_urls && data.image_urls.length > 0) {
          setImagemSelecionada(data.image_urls[0]);
        }
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
          
          {/* --- A GALERIA DE IMAGENS COMEÇA AQUI --- */}
          <div className="flex flex-col gap-4">
            {/* Imagem Principal em Destaque */}
            <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              {imagemSelecionada && (
                <img
                  src={imagemSelecionada}
                  alt={`Imagem principal do produto ${produto.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              )}
            </div>
            
            {/* Miniaturas (Thumbnails) */}
            <div className="grid grid-cols-4 gap-2">
              {produto.image_urls.map((url, index) => (
                <div
                  key={index}
                  onClick={() => setImagemSelecionada(url)} // Ao clicar, muda a imagem principal
                  className={`w-full aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                    imagemSelecionada === url ? 'border-frida-red scale-105' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={url}
                    alt={`Miniatura ${index + 1} do produto ${produto.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* --- A GALERIA DE IMAGENS TERMINA AQUI --- */}

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