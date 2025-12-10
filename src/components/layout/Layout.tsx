import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen text-foreground">
      <main className=" ">{children}</main>
    </div>
  );
}
