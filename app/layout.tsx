// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { yekan } from "./fonts";
import Footer from "./components/layout/Footer";
import ClientHeader from "./components/layout/ClientHeader";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App with i18n",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale(); // from i18n/request.ts
  const messages = await getMessages(); // from i18n/request.ts
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={yekan.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientHeader />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
