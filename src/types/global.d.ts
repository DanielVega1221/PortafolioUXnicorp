// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Window {
  gtag: (...args: any[]) => void;
  dataLayer: Record<string, unknown>[];
}
