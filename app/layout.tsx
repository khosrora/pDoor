// app/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ClientHeader from "./components/layout/ClientHeader";
import Footer from "./components/layout/Footer";
import { yekan } from "./fonts";
import "./globals.css";
import { Toaster } from "sonner";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale(); // from i18n/request.ts
  const messages = await getMessages(); // from i18n/request.ts
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={yekan.variable}>
        <Toaster
          richColors
          position="bottom-center"
          toastOptions={{
            style: {
              fontFamily: 'var(--font-yekan)',
            },
          }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientHeader />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
