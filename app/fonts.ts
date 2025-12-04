import localFont from "next/font/local";

export const yekan = localFont({
  src: [
    { path: "./../public/fonts/IRANYekanXFaNum-Thin.ttf", weight: "100" },
    { path: "./../public/fonts/IRANYekanXFaNum-Light.ttf", weight: "300" },
    { path: "./../public/fonts/IRANYekanXFaNum-Regular.ttf", weight: "400" },
    { path: "./../public/fonts/IRANYekanXFaNum-Medium.ttf", weight: "500" },
    { path: "./../public/fonts/IRANYekanXFaNum-Bold.ttf", weight: "700" },
    { path: "./../public/fonts/IRANYekanXFaNum-ExtraBold.ttf", weight: "800" },
    { path: "./../public/fonts/IRANYekanXFaNum-Black.ttf", weight: "900" },
  ],
  variable: "--font-yekan",
  display: "swap",
});
