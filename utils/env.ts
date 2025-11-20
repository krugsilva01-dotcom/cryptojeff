
export const getEnv = (key: string): string => {
  // Tenta obter do import.meta.env (Vite/Navegador)
  // Cast import.meta to any to avoid TS error "Property 'env' does not exist on type 'ImportMeta'"
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    return (import.meta as any).env[key] || '';
  }
  // Fallback para process.env (Node/Server) caso necessário em outros contextos
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || '';
  }
  return '';
};