
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se há um usuário salvo no localStorage
    const savedUser = localStorage.getItem('fiquefrida_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        console.log('Usuário carregado do localStorage:', userData);
      } catch (error) {
        console.error('Erro ao carregar usuário salvo:', error);
        localStorage.removeItem('fiquefrida_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    console.log('Tentando fazer login com:', email);
    
    // Simulação de login (em produção, integrar com Supabase)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password.length >= 6) {
      const newUser: User = {
        id: Date.now().toString(),
        name: email.split('@')[0],
        email: email
      };
      
      setUser(newUser);
      localStorage.setItem('fiquefrida_user', JSON.stringify(newUser));
      console.log('Login realizado com sucesso:', newUser);
      setIsLoading(false);
      return true;
    }
    
    console.log('Falha no login - credenciais inválidas');
    setIsLoading(false);
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    console.log('Tentando registrar usuário:', { name, email });
    
    // Simulação de cadastro
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (name && email && password.length >= 6) {
      const newUser: User = {
        id: Date.now().toString(),
        name: name,
        email: email
      };
      
      setUser(newUser);
      localStorage.setItem('fiquefrida_user', JSON.stringify(newUser));
      console.log('Registro realizado com sucesso:', newUser);
      setIsLoading(false);
      return true;
    }
    
    console.log('Falha no registro - dados inválidos');
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    console.log('Fazendo logout...');
    setUser(null);
    localStorage.removeItem('fiquefrida_user');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
