
import Header from "@/components/Header";
import { CheckCircle, Mail, Youtube } from "lucide-react";

export default function Sucesso() {
  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-8 text-center">
          <CheckCircle className="mx-auto mb-6 text-frida-green" size={80} />
          
          <h1 className="font-display text-3xl text-frida-red mb-4">
            Pagamento Confirmado!
          </h1>
          
          <p className="text-lg text-frida-dark mb-8">
            Obrigada pela sua compra! Seu projeto já está sendo preparado.
          </p>

          <div className="bg-frida-beige rounded-lg p-6 mb-8">
            <h2 className="font-bold text-xl text-frida-dark mb-4">
              O que acontece agora?
            </h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-frida-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">1</div>
                <div>
                  <h3 className="font-bold text-frida-dark">Moldes em PDF</h3>
                  <p className="text-frida-dark/70">Você receberá por email os moldes em PDF em até 10 minutos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-frida-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">2</div>
                <div>
                  <h3 className="font-bold text-frida-dark">Acesso à Aula</h3>
                  <p className="text-frida-dark/70">O acesso à aula no YouTube será liberado no seu Gmail em até 2 horas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-2 text-frida-dark">
              <Mail size={20} />
              <span>Verifique seu email</span>
            </div>
            <div className="flex items-center gap-2 text-frida-dark">
              <Youtube size={20} />
              <span>Aguarde liberação da aula</span>
            </div>
          </div>

          <button 
            onClick={() => window.location.href = '/'}
            className="mt-8 bg-frida-red text-white px-8 py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
          >
            Voltar ao Início
          </button>
        </div>
      </main>
    </div>
  );
}
