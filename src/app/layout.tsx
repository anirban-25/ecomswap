import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthRouter from "./authRouter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FavTutor AI Learning - Master Programming with Personalized AI-Powered Tool",
  description: "Enhance your programming skills with FavTutor AI Learning, where personalized AI tools adapt to your learning style and pace. Dive into our interactive courses in Python, Java, and C++ and start mastering coding like a pro today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="=">
        <body className={inter.className}>
            
              <div className=" min-h-screen">{children}</div>
            
        </body>
      </html>
  );
}