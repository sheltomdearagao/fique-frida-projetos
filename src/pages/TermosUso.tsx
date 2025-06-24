
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermosUso = () => {
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
              Termos de Uso
            </h1>
            <p className="text-frida-brown/80 text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Ao acessar e usar o site Fique Frida, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                2. Descrição do Serviço
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                O Fique Frida é uma plataforma que oferece projetos de costura digitais, incluindo moldes, tutoriais e vídeos educativos para entusiastas de costura de todos os níveis.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                3. Uso do Conteúdo
              </h2>
              <p className="text-frida-brown/80 leading-relaxed mb-4">
                Todo o conteúdo disponibilizado no Fique Frida, incluindo mas não limitado a:
              </p>
              <ul className="list-disc list-inside text-frida-brown/80 space-y-2 ml-4">
                <li>Moldes e padrões de costura</li>
                <li>Vídeos tutoriais</li>
                <li>Instruções escritas</li>
                <li>Imagens e fotografias</li>
              </ul>
              <p className="text-frida-brown/80 leading-relaxed mt-4">
                Destina-se exclusivamente ao uso pessoal e não comercial. É proibida a reprodução, distribuição ou venda do conteúdo sem autorização expressa.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                4. Responsabilidades do Usuário
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Você é responsável por manter a confidencialidade de sua conta e senha, e por todas as atividades que ocorrem sob sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                5. Limitação de Responsabilidade
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                O Fique Frida não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços ou conteúdo.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                6. Modificações dos Termos
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do serviço constitui aceitação dos termos modificados.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-frida-brown font-semibold mb-4">
                7. Contato
              </h2>
              <p className="text-frida-brown/80 leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato conosco através da página de contato ou pelo email: contato@fiquefrida.com.br
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermosUso;
