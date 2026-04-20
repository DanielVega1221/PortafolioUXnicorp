import { CurrencyProvider } from "@/app/servicios/CurrencyProvider";

export default function EnServiciosLayout({ children }: { children: React.ReactNode }) {
  return <CurrencyProvider>{children}</CurrencyProvider>;
}
