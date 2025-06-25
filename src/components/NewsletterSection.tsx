
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Obrigada!",
        description: "Você foi inscrito(a) na nossa newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-frida-cream">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-frida-brown mb-4">
          Fique por dentro das novidades
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Receba em primeira mão nossos novos projetos e dicas de costura.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" className="bg-frida-teal hover:bg-frida-green">
            Inscrever
          </Button>
        </form>
      </div>
    </section>
  );
}
