import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
