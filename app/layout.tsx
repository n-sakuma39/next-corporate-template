import Header from "./_components/Header/index";
import Footer from "./_components/Footer/index";
import "./globals.css";

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
