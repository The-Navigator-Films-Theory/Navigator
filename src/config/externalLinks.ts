export const EXTERNAL_LINKS = {
  betaFeedbackFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdiwmeiyL5dfhuabC2jijpEz_E0YDys-SZUSdjThrG2zkX9SA/viewform?usp=publish-editor'
//   betaQaFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdiwmeiyL5dfhuabC2jijpEz_E0YDys-SZUSdjThrG2zkX9SA/viewform?usp=publish-editor',
// 
}
;

export function hasExternalLink(url: string): boolean {
  return Boolean(url && url.trim().length > 0);
}
