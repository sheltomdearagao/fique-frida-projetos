
import { useState } from "react";
import Header from "@/components/Header";
import { CreditCard, Pix, Mail } from "lucide-react";

export default function Pagamento() {
  const [metodoPagamento, setMetodoPagamento] = useState('pix');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="font-display text-3xl text-frida-red mb-8 text-center">
          Finalizar Pagamento
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resumo do Pedido */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="font-bold text-xl text-frida-dark mb-4">Resumo do Pedido</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-bold">Shoulder Bag Moderna</h3>
                  <p className="text-sm text-frida-dark/70">Moldes PDF + Aula YouTube</p>
                </div>
                <span className="font-bold text-frida-red">R$ 49,90</span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span className="text-frida-red">R$ 49,90</span>
              </div>
            </div>
          </div>

          {/* Dados de Pagamento */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="font-bold text-xl text-frida-dark mb-4">Dados para Entrega</h2>
            
            <div className="mb-6">
              <label className="block text-frida-dark font-medium mb-2">
                <Mail className="inline mr-2" size={16} />
                Gmail (obrigatório para acesso às aulas)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@gmail.com"
                className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none"
                required
              />
              <p className="text-sm text-frida-dark/60 mt-1">
                O acesso à aula será liberado neste Gmail
              </p>
            </div>

            <h3 className="font-bold text-frida-dark mb-4">Método de Pagamento</h3>
            
            <div className="space-y-3 mb-6">
              <label className="flex items-center p-4 border-2 border-frida-beige rounded-lg cursor-pointer hover:border-frida-orange">
                <input
                  type="radio"
                  name="pagamento"
                  value="pix"
                  checked={metodoPagamento === 'pix'}
                  onChange={(e) => setMetodoPagamento(e.target.value)}
                  className="mr-3"
                />
                <Pix className="mr-3 text-frida-blue" size={24} />
                <span className="font-medium">PIX (Aprovação imediata)</span>
              </label>
              
              <label className="flex items-center p-4 border-2 border-frida-beige rounded-lg cursor-pointer hover:border-frida-orange">
                <input
                  type="radio"
                  name="pagamento"
                  value="cartao"
                  checked={metodoPagamento === 'cartao'}
                  onChange={(e) => setMetodoPagamento(e.target.value)}
                  className="mr-3"
                />
                <CreditCard className="mr-3 text-frida-red" size={24} />
                <span className="font-medium">Cartão de Crédito</span>
              </label>
            </div>

            <button className="w-full bg-frida-red text-white py-4 rounded-lg font-bold text-lg hover:bg-frida-orange transition-colors">
              Finalizar Pagamento - R$ 49,90
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
