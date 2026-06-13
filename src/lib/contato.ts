/**
 * Dados de contato centralizados.
 * Ponto único de verdade — altere o número/e-mail aqui e o site inteiro acompanha.
 */

export const WHATSAPP_NUMERO = '818058508505'; // formato wa.me (sem +, espaços ou traços)
export const EMAIL = 'marianagouvea.psi@gmail.com';
export const INSTAGRAM_URL = 'https://instagram.com/marianagouvea.psi';
export const INSTAGRAM_HANDLE = '@marianagouvea.psi';

export const MENSAGEM_PADRAO =
  'Olá, Mariana! Vim pelo site e gostaria de agendar uma conversa.';

/** Monta um link wa.me com a mensagem pré-preenchida (URL-encoded). */
export function linkWhatsApp(mensagem: string = MENSAGEM_PADRAO): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

/** Link mailto: para o e-mail de contato. */
export function linkEmail(): string {
  return `mailto:${EMAIL}`;
}
