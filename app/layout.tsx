import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/_components/Header/index";
import Footer from "@/app/_components/Footer/index";

export const metadata: Metadata = {
  title: {
    template: "%s | コーポレートサイトテンプレート",
    default: "コーポレートサイトテンプレート",
  },
  description: "コーポレートサイトのテンプレートサイトです。",
  openGraph: {
    title: "コーポレートサイトテンプレート",
    description: "コーポレートサイトのテンプレートサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
