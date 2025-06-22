
import { Mail, Instagram, Phone, MapPin, Clock, Heart } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Formulário enviado:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-frida-red mb-4">
            Entre em Contato
          </h1>
          <div className="w-24 border-b-3 border-frida-orange mx-auto mb-6" />
          <p className="text-lg text-frida-dark/80 max-w-2xl mx-auto">
            Tem alguma dúvida sobre nossos projetos de costura? Quer sugerir algo novo? 
            Adoraria conversar com você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-frida-orange/20">
              <h2 className="font-display text-2xl text-frida-red mb-6 flex items-center gap-3">
                <Heart className="text-frida-red" size={24} />
                Vamos Conversar!
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-frida-beige/50 rounded-lg hover:bg-frida-beige/70 transition-colors">
                  <div className="w-12 h-12 bg-frida-red/20 rounded-full flex items-center justify-center">
                    <Mail className="text-frida-red" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-frida-dark">E-mail</h3>
                    <a 
                      href="mailto:fiquefrida@gmail.com" 
                      className="text-frida-blue hover:text-frida-red transition-colors"
                    >
                      fiquefrida@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-frida-beige/50 rounded-lg hover:bg-frida-beige/70 transition-colors">
                  <div className="w-12 h-12 bg-frida-orange/20 rounded-full flex items-center justify-center">
                    <Instagram className="text-frida-orange" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-frida-dark">Instagram</h3>
                    <a 
                      href="https://instagram.com/fiquefrida" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-frida-blue hover:text-frida-red transition-colors"
                    >
                      @fiquefrida
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-frida-beige/50 rounded-lg hover:bg-frida-beige/70 transition-colors">
                  <div className="w-12 h-12 bg-frida-green/20 rounded-full flex items-center justify-center">
                    <Phone className="text-frida-green" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-frida-dark">WhatsApp</h3>
                    <a 
                      href="https://wa.me/5571991087886" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-frida-blue hover:text-frida-red transition-colors"
                    >
                      (71) 99108-7886
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-frida-beige/50 rounded-lg">
                  <div className="w-12 h-12 bg-frida-yellow/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-frida-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-frida-dark">Localização</h3>
                    <p className="text-frida-dark/70">Salvador, Bahia - Brasil</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-frida-beige/50 rounded-lg">
                  <div className="w-12 h-12 bg-frida-blue/20 rounded-full flex items-center justify-center">
                    <Clock className="text-frida-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-frida-dark">Horário de Atendimento</h3>
                    <p className="text-frida-dark/70">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-frida-red/20">
            <h2 className="font-display text-2xl text-frida-red mb-6">
              Envie sua Mensagem
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-frida-dark font-bold mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-frida-beige rounded-lg focus:border-frida-orange focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-frida-dark font-bold mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-frida-beige rounded-lg focus:border-frida-orange focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-frida-dark font-bold mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-frida-beige rounded-lg focus:border-frida-orange focus:outline-none transition-colors"
                  placeholder="Do que gostaria de falar?"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-frida-dark font-bold mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-frida-beige rounded-lg focus:border-frida-orange focus:outline-none transition-colors resize-none"
                  placeholder="Conte-me mais sobre sua ideia ou dúvida..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-frida-red hover:bg-frida-orange text-white py-3 font-bold text-lg transition-colors"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Seção adicional */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-frida-yellow/20">
          <h3 className="font-display text-2xl text-frida-red mb-4">
            Prefere Falar Direto?
          </h3>
          <p className="text-frida-dark/70 mb-6 max-w-2xl mx-auto">
            Se preferir um contato mais direto, me chama no WhatsApp! 
            Respondo rapidinho e adoraria conhecer seu projeto.
          </p>
          <a
            href="https://wa.me/5571991087886?text=Olá! Gostaria de saber mais sobre os projetos de costura."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-frida-green text-white px-8 py-4 rounded-full font-bold hover:bg-frida-blue transition-colors"
          >
            <Phone size={20} />
            Chamar no WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
