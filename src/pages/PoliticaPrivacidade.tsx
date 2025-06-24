
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-frida-teal hover:text-frida-green transition-colors font-medium mb-6"
            >
              <ArrowLeft size={20} />
              Voltar ao início
            </Link>
            <h1 className="font-display text-3xl md:text-4xl text-frida-red font-bold mb-4">
              Política de Privacidade
            </h1>
            <p className="text-frida-brown/80 text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                1. Informações que Coletamos
              </h2>
              <p className="text-frida-brown/80 leading-relaxed mb-4">
                Coletamos informações que você nos fornece diretamente, incluindo:
              </p>
              <ul className="list-disc list-inside text-frida-brown/80 space-y-2 ml-4">
                <li>Nome e endereço de email ao criar uma conta</li>
                <li>Informações de pagamento para processamento de compras</li>
                <li>Comunicações quando você entra em contato conosco</li>
                <li>Dados de uso do site para melhorar nossos serviços</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                2. Como Usamos suas Informações
              </h2>
              <p className="text-frida-brown/80 leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside text-frida-brown/80 space-y-2 ml-4">
                <li>Fornecer e manter nossos serviços</li>
                <li>Processar transações e enviar confirmações</li>
                <li>Enviar comunicações importantes sobre sua conta</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Personalizar sua experiência no site</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                3. Compartilhamento de Informações
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta política ou com seu consentimento explícito. Podemos compartilhar informações com prestadores de serviços confiáveis que nos ajudam a operar nosso negócio.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                4. Segurança dos Dados
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                5. Cookies e Tecnologias Similares
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                6. Seus Direitos
              </h2>
              <p className="text-frida-brown/80 leading-relaxed mb-4">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside text-frida-brown/80 space-y-2 ml-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados incompletos ou incorretos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento a qualquer momento</li>
                <li>Portabilidade de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                7. Retenção de Dados
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, salvo quando a retenção por período maior for exigida por lei.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                8. Alterações nesta Política
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Podemos atualizar esta política de privacidade periodicamente. Notificaremos você sobre alterações significativas através do email ou de um aviso em nosso site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                9. Contato
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Para questões sobre esta política de privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco: contato@fiquefrida.com.br
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PoliticaPrivacidade;
