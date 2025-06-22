
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar login com Supabase
    console.log('Login', { email, senha });
  };

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl text-frida-red font-bold mb-2">
              Entrar
            </h1>
            <p className="text-frida-dark/70">
              Acesse sua conta para ver seus projetos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Sua senha"
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

            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-frida-dark/70">Lembrar de mim</span>
              </label>
              <Link to="/recuperar-senha" className="text-sm text-frida-red hover:underline">
                Esqueceu a senha?
              </Link>
            </div>

            <button 
              type="submit"
              className="w-full bg-frida-red text-white py-3 rounded-lg font-bold text-lg hover:bg-frida-orange transition-colors"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-frida-dark/70">
              Não tem uma conta?{" "}
              <Link to="/cadastro" className="text-frida-red hover:underline font-medium">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
