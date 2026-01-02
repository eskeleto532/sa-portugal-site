import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import { useLocation } from "wouter";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const canonicalUrl = `https://saportugal.org${location}`;

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
