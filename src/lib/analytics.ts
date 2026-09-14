declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envia um evento para o GA4 (via gtag.js), se disponível.
 * Não quebra a aplicação caso o gtag ainda não tenha carregado
 * (ex: bloqueador de anúncios, script ainda carregando).
 */
export function trackEvent(eventName: string, params: Record<string, string> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
