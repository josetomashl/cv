import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Tomás CV",
  description: "Created by myself using React and Next."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
