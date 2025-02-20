export {};

declare global {
  interface Window {
    adsbygoogle?: { push: (params: object) => void }[];
  }
}
