
import { useState } from "react";
import { Mail, CreditCard, FileText, Video } from "lucide-react";

interface CompraProjeto {
  nome: string;
  preco: string;
  onClose: () => void;
}

export default function CompraProjeto({ nome, preco, onClose }: CompraProjeto) {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@gmail.com')) {
      setStep(2);
    } else {
      alert('Por favor, use um endereço Gmail válido para acessar as aulas.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display text-xl text-frida-red font-bold">
            Finalizar Compra
          </h3>
          <button 
            onClick={onClose}
            className="text-frida-dark/60 hover:text-frida-dark"
          >
            ✕
          </button>
        </div>

        <div className="bg-frida-beige rounded-lg p-4 mb-6">
          <h4 className="font-bold text-frida-dark mb-2">{nome}</h4>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-frida-red">{preco}</span>
          </div>
          
          <div className="flex gap-4 mt-3 text-sm text-frida-dark/70">
            <div className="flex items-center gap-1">
              <FileText size={16} />
              <span>Moldes PDF</span>
            </div>
            <div className="flex items-center gap-1">
              <Video size={16} />
              <span>Aula YouTube</span>
            </div>
          </div>
        </div>

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
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

            <button 
              type="submit"
              className="w-full bg-frida-red text-white py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
            >
              Continuar para Pagamento
            </button>
          </form>
        )}

        {step === 2 && (
          <div className="text-center">
            <CreditCard className="mx-auto mb-4 text-frida-blue" size={48} />
            <h4 className="font-bold text-frida-dark mb-2">
              Redirecionando para pagamento...
            </h4>
            <p className="text-sm text-frida-dark/70 mb-4">
              Gmail confirmado: {email}
            </p>
            <div className="bg-frida-green/10 border border-frida-green/20 rounded-lg p-4">
              <p className="text-sm text-frida-dark">
                ✅ Após a confirmação do pagamento, você receberá:
                <br />• Link dos moldes em PDF
                <br />• Acesso liberado na aula do YouTube
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
