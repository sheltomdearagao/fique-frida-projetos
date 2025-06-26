
import { Product } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onVerDetalhes: (produto: Product) => void;
  onAdicionarCarrinho?: (e: React.MouseEvent, produto: Product) => void;
}

export default function ProductGrid({ products, onVerDetalhes, onAdicionarCarrinho }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
      {products?.map(produto => (
        <ProductCard
          key={produto.id}
          produto={produto}
          onVerDetalhes={onVerDetalhes}
          onAdicionarCarrinho={onAdicionarCarrinho}
        />
      ))}
    </div>
  );
}
