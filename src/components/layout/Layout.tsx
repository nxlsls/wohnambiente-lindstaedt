import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip Links for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Direkt zum Inhalt
      </a>
      <a
        href="#contact-section"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-48 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Zum Kontakt
      </a>

      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
