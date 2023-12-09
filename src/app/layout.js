import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IPSUM - Saas Solution",
  description: "Saas Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div class="bg-[#202020]">
          <main>
            <Navbar />
            {children}
            <Footer></Footer>
          </main>
        </div>
      </body>
    </html>
  );
}
