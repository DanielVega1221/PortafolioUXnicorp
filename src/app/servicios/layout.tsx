import { CurrencyProvider } from "./CurrencyProvider";

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <CurrencyProvider>{children}</CurrencyProvider>;
}
