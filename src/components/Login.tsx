
import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar autenticação com Supabase
    console.log(isLogin ? 'Login' : 'Cadastro', { email, senha, nome });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display text-xl text-frida-red font-bold">
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </h3>
          <button onClick={onClose} className="text-frida-dark/60 hover:text-frida-dark">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-frida-dark font-medium mb-2">
                <User className="inline mr-2" size={16} />
                Nome
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none"
                required={!isLogin}
              />
            </div>
          )}

          <div>
            <label className="block text-frida-dark font-medium mb-2">
              <Mail className="inline mr-2" size={16} />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-frida-dark font-medium mb-2">
              <Lock className="inline mr-2" size={16} />
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-3 border-2 border-frida-beige rounded-lg focus:border-frida-red outline-none"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-frida-red text-white py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
          >
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-frida-red hover:underline"
          >
            {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
          </button>
        </div>
      </div>
    </div>
  );
}
