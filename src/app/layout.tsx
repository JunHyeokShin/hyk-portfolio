import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const HelveticaNeueCyr = localFont({
  src: [
    { path: "../../public/fonts/HelveticaNeueCyr-Thin.ttf", weight: "100" },
    { path: "../../public/fonts/HelveticaNeueCyr-Thin-Italic.ttf", weight: "100", style: "italic" },
    { path: "../../public/fonts/HelveticaNeueCyr-Light.ttf", weight: "300" },
    { path: "../../public/fonts/HelveticaNeueCyr-Light-Italic.ttf", weight: "300", style: "italic" },
    { path: "../../public/fonts/HelveticaNeueCyr-Roman.ttf", weight: "400" },
    { path: "../../public/fonts/HelveticaNeueCyr-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/fonts/HelveticaNeueCyr-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/HelveticaNeueCyr-Medium-Italic.ttf", weight: "500", style: "italic" },
    { path: "../../public/fonts/HelveticaNeueCyr-Bold.ttf", weight: "700" },
    { path: "../../public/fonts/HelveticaNeueCyr-Bold-Italic.ttf", weight: "700", style: "italic" },
    { path: "../../public/fonts/HelveticaNeueCyr-Black.ttf", weight: "900" },
    { path: "../../public/fonts/HelveticaNeueCyr-Black-Italic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-helvetica-neue-cyr",
});

const Pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "HYK Portfolio",
  description: "HYK's Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable} ${HelveticaNeueCyr.variable} ${Pretendard.variable}`}>{children}</body>
    </html>
  );
}
