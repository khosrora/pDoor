// app/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ClientHeader from "./components/layout/ClientHeader";
import Footer from "./components/layout/Footer";
import { yekan } from "./fonts";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { CompareProvider } from "./context/CompareContext";
import DirectionProvider from "./components/DirectionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  const isFa = locale === "fa";

  return (
    <html
      lang={locale}
      dir={isFa ? "rtl" : "ltr"}
      className={`${yekan.variable} ${inter.variable}`}
    >
      <body className={isFa ? "font-fa" : "font-en"}>
        <Toaster
          richColors
          position="bottom-center"
          toastOptions={{
            style: {
              fontFamily: isFa
                ? "var(--font-yekan)"
                : "var(--font-inter)",
            },
          }}
        />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <CompareProvider>
            <ClientHeader />
            <DirectionProvider />
            {children}
            <Footer />
          </CompareProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
