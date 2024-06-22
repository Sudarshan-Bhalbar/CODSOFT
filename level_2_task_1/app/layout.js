import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "../app/Components/navbar";

const font = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata = {
  title: "Naukari | Get your dream Job",
  description: "Get your dream Job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
