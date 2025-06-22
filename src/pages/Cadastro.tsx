
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    // TODO: Implementar cadastro com Supabase
    console.log('Cadastro', { nome, email, senha });
  };

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl text-frida-red font-bold mb-2">
              Criar Conta
            </h1>
            <p className="text-frida-dark/70">
              Cadastre-se para acessar seus projetos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-frida-dark font-medium mb-2">
                <User className="inline mr-2" size={16} />
                Nome Completo
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none transition-colors"
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div>
              <label className="block text-frida-dark font-medium mb-2">
                <Mail className="inline mr-2" size={16} />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none transition-colors"
                placeholder="seu.email@gmail.com"
                required
              />
            </div>

            <div>
              <label className="block text-frida-dark font-medium mb-2">
                <Lock className="inline mr-2" size={16} />
                Senha
              </label>
              <div className="relative">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none transition-colors pr-10"
                  placeholder="Mínimo 6 caracteres"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-frida-dark/60"
                >
                  {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-frida-dark font-medium mb-2">
                <Lock className="inline mr-2" size={16} />
                Confirmar Senha
              </label>
              <div className="relative">
                <input
                  type={mostrarConfirmarSenha ? "text" : "password"}
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none transition-colors pr-10"
                  placeholder="Digite a senha novamente"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-frida-dark/60"
                >
                  {mostrarConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-frida-red text-white py-3 rounded-lg font-bold text-lg hover:bg-frida-orange transition-colors"
            >
              Criar Conta
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-frida-dark/70">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-frida-red hover:underline font-medium">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
