
import { supabase } from '@/integrations/supabase/client';

// Dados dos produtos com suas respectivas listas de imagens
const productsToUpdate = [
  {
    name: 'Projeto Shoulder bag',
    images: [
      'https://klkoozzutqikdswubdgj.supabase.co/storage/v1/object/public/images/shoulder1.jpg',
      'https://klkoozzutqikdswubdgj.supabase.co/storage/v1/object/public/images/Shoulder2.jpg',
      'https://klkoozzutqikdswubdgj.supabase.co/storage/v1/object/public/images/Shoulder3.jpg'
    ]
  },
  {
    name: 'Projeto Carteira Sol',
    images: [
      'https://klkoozzutqikdswubdgj.supabase.co/storage/v1/object/public/images/Carteira%20Sol.jpg',
      'https://klkoozzutqikdswubdgj.supabase.co/storage/v1/object/public/images/Carteira2.jpg',
      'https://klkoozzutqikdswubdgj.supabase.co/storage/v1/object/public/images/Cartiera3.jpg'
    ]
  },
  {
    name: 'Pochete Dona Frida',
    images: [
      'https://klkoozzutqikdswubdgj.supabase.co/storage/v1/object/public/images/Pochete%20Dona%20Frida.png',
      'https://klkoozzutqikdswubdgj.supabase.co/storage/v1/object/public/images/Pochete2.jpg',
      'https://klkoozzutqikdswubdgj.supabase.co/storage/v1/object/public/images/Pochete3.jpg'
    ]
  }
];

// Função para atualizar as imagens dos produtos
export async function updateProductImages() {
  console.log('🚀 Iniciando script de atualização de imagens dos produtos...');

  try {
    // Primeiro, vamos verificar os produtos existentes
    const { data: existingProducts, error: fetchError } = await supabase
      .from('products')
      .select('id, name');

    if (fetchError) {
      console.error('❌ Erro ao buscar produtos existentes:', fetchError.message);
      return;
    }

    console.log('📋 Produtos encontrados no banco:', existingProducts?.map(p => p.name));

    // Atualizar cada produto
    for (const productData of productsToUpdate) {
      console.log(`\n🔄 Processando produto: ${productData.name}`);

      // Primeiro vamos adicionar a coluna image_urls se não existir
      const { data, error } = await supabase
        .from('products')
        .update({ 
          image_url: productData.images[0], // Mantém a primeira imagem como principal
          // Vamos armazenar todas as imagens como JSON em um campo text por enquanto
        })
        .eq('name', productData.name)
        .select();

      if (error) {
        console.error(`❌ Erro ao atualizar produto '${productData.name}':`, error.message);
      } else if (data && data.length > 0) {
        console.log(`✅ Produto '${productData.name}' atualizado com sucesso!`);
        console.log(`   Imagem principal definida como: ${productData.images[0]}`);
      } else {
        console.warn(`⚠️ Produto '${productData.name}' não encontrado no banco de dados`);
      }
    }

    console.log('\n🎉 Script de atualização finalizado!');
    
  } catch (error) {
    console.error('💥 Erro geral no script:', error);
  }
}

// Função para executar o script - descomente a linha abaixo para rodar
// updateProductImages();
