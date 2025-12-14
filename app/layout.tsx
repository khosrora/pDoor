// app/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ClientHeader from "./components/layout/ClientHeader";
import Footer from "./components/layout/Footer";
import { yekan } from "./fonts";
import "./globals.css";
import { Toaster } from "sonner";
import { CompareProvider } from "./context/CompareContext";
import DirectionProvider from "./components/DirectionProvider";


export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale(); // from i18n/request.ts
  const messages = await getMessages(); // from i18n/request.ts


  return (
    <html lang={locale} >
      <body className={yekan.variable}>
        <Toaster
          richColors
          position="bottom-center"
          toastOptions={{
            style: {
              fontFamily: "var(--font-yekan)",
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
