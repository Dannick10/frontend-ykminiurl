export {};

declare global {
  interface Window {
    adsbygoogle?: { push: (config: object) => void }[];
  }
}
