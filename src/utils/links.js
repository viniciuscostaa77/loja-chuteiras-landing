import loja from '../config/loja.js'

/**
 * Gera um link do WhatsApp (wa.me) usando o número central configurado
 * em src/config/loja.js, com uma mensagem automática opcional.
 *
 * @param {string} [mensagem] - Mensagem pré-preenchida ao abrir o WhatsApp.
 * @returns {string} URL pronta para o link/botão.
 */
export function getWhatsappLink(mensagem) {
  const numero = loja.whatsapp.replace(/\D/g, '')
  const base = `https://wa.me/${numero}`

  if (!mensagem) return base

  return `${base}?text=${encodeURIComponent(mensagem)}`
}

/**
 * Retorna o link do site/loja online, configurado em src/config/loja.js.
 * Centralizado aqui pelo mesmo motivo do WhatsApp: trocar em um só lugar
 * atualiza todos os botões que levam pro site.
 */
export function getSiteLink() {
  return loja.siteUrl
}

// Mensagens padrão reutilizáveis por contexto/botão.
export const whatsappMessages = {
  geral: 'Olá! Vim pela landing page e queria tirar uma dúvida sobre os produtos.',
  duvidaModelo: 'Olá! Queria tirar uma dúvida sobre modelos e tamanhos disponíveis.',
}
