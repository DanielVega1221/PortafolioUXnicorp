type GtagArg = string | number | boolean | null | undefined | Record<string, unknown>;

interface Window {
  gtag: (...args: GtagArg[]) => void;
  dataLayer: Record<string, unknown>[];
}
