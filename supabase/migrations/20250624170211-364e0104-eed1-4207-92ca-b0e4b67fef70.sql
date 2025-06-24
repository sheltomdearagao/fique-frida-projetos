
-- Remove os produtos solicitados
DELETE FROM public.products WHERE name IN (
  'Mochila urban style',
  'Pochete Vintage', 
  'Necessaire Floral',
  'Shoulder bag elegante'
);

-- Atualiza o preço dos produtos restantes para R$ 29,90
UPDATE public.products 
SET price = 29.90 
WHERE name IN (
  'Pochete Dona Frida',
  'Projeto Carteira Sol',
  'Projeto Shoulder bag'
);
