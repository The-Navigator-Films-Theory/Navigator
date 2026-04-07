export const EXTERNAL_LINKS = {
  betaFeedbackFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSevHjWyq6pLK4NSxz68b-AxDMqS9t8q1QiPWipgn8n1N8eV6w/viewform?usp=publish-editor'
//   betaQaFormUrl: '',
// 
}
;

export function hasExternalLink(url: string): boolean {
  return Boolean(url && url.trim().length > 0);
}
