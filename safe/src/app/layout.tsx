import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { Footer, Header, ChakraWrapper } from "@/components";

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Governor Initiative",
  description: "Governor Initiative for Artificial Intelligence, Web 3.0 and Metaverse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <ChakraWrapper>{children}</ChakraWrapper>
        <Footer />
      </body>
    </html>
  );
}
