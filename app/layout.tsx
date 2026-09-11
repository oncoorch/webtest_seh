import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sociedad Ecuatoriana de Hematologia",
  description: "Portal institucional, cientifico y educativo de la Sociedad Ecuatoriana de Hematologia."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
