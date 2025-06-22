
import { useState } from "react";
import Header from "@/components/Header";
import { CreditCard, QrCode, Mail, Lock, User, Phone } from "lucide-react";

export default function Pagamento() {
  const [metodoPagamento, setMetodoPagamento] = useState('pix');
  const [dadosFormulario, setDadosFormulario] = useState({
    email: '',
    nome: '',
    telefone: '',
    endereco: '',
    cep: '',
    cidade: ''
  });

  const handleInputChange = (campo: string, valor: string) => {
    setDadosFormulario(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <h1 className="font-display text-2xl sm:text-3xl text-frida-red mb-6 md:mb-8 text-center font-bold">
          Finalizar Pagamento
        </h1>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Resumo do Pedido */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg order-2 lg:order-1">
            <h2 className="font-bold text-lg sm:text-xl text-frida-dark mb-4 sm:mb-6">
              Resumo do Pedido
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-4 border-b border-frida-beige">
                <div className="mb-2 sm:mb-0">
                  <h3 className="font-bold text-sm sm:text-base">Shoulder Bag Moderna</h3>
                  <p className="text-xs sm:text-sm text-frida-dark/70">Moldes PDF + Aula YouTube</p>
                </div>
                <span className="font-bold text-frida-red text-sm sm:text-base">R$ 49,90</span>
              </div>
              <div className="flex justify-between items-center font-bold text-base sm:text-lg pt-2">
                <span>Total:</span>
                <span className="text-frida-red">R$ 49,90</span>
              </div>
            </div>
          </div>

          {/* Formulário de Dados */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg order-1 lg:order-2">
            <h2 className="font-bold text-lg sm:text-xl text-frida-dark mb-4 sm:mb-6">
              Dados para Entrega
            </h2>
            
            <form className="space-y-4 sm:space-y-5">
              {/* Email */}
              <div>
                <label className="block text-frida-dark font-medium mb-2 text-sm sm:text-base">
                  <Mail className="inline mr-2" size={16} />
                  Gmail (obrigatório para acesso às aulas)
                </label>
                <input
                  type="email"
                  value={dadosFormulario.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="seu.email@gmail.com"
                  className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none transition-colors text-sm sm:text-base"
                  required
                />
                <p className="text-xs sm:text-sm text-frida-dark/60 mt-1">
                  O acesso à aula será liberado neste Gmail
                </p>
              </div>

              {/* Nome e Telefone */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-frida-dark font-medium mb-2 text-sm sm:text-base">
                    <User className="inline mr-2" size={16} />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={dadosFormulario.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-frida-dark font-medium mb-2 text-sm sm:text-base">
                    <Phone className="inline mr-2" size={16} />
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={dadosFormulario.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Método de Pagamento */}
              <div>
                <h3 className="font-bold text-frida-dark mb-3 sm:mb-4 text-sm sm:text-base">
                  Método de Pagamento
                </h3>
                
                <div className="space-y-3">
                  <label className="flex items-center p-3 sm:p-4 border-2 border-frida-beige rounded-lg cursor-pointer hover:border-frida-orange transition-colors">
                    <input
                      type="radio"
                      name="pagamento"
                      value="pix"
                      checked={metodoPagamento === 'pix'}
                      onChange={(e) => setMetodoPagamento(e.target.value)}
                      className="mr-3 w-4 h-4"
                    />
                    <QrCode className="mr-3 text-frida-blue" size={20} />
                    <div className="flex-1">
                      <span className="font-medium text-sm sm:text-base">PIX</span>
                      <p className="text-xs sm:text-sm text-frida-dark/60">Aprovação imediata</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-3 sm:p-4 border-2 border-frida-beige rounded-lg cursor-pointer hover:border-frida-orange transition-colors">
                    <input
                      type="radio"
                      name="pagamento"
                      value="cartao"
                      checked={metodoPagamento === 'cartao'}
                      onChange={(e) => setMetodoPagamento(e.target.value)}
                      className="mr-3 w-4 h-4"
                    />
                    <CreditCard className="mr-3 text-frida-red" size={20} />
                    <div className="flex-1">
                      <span className="font-medium text-sm sm:text-base">Cartão de Crédito</span>
                      <p className="text-xs sm:text-sm text-frida-dark/60">Até 12x sem juros</p>
                    </div>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-frida-red text-white py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg hover:bg-frida-orange transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg"
              >
                Finalizar Pagamento - R$ 49,90
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
