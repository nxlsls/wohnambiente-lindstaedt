import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = "4917859170381",
  message = "Hallo, ich interessiere mich für Ihre Raumausstattung-Leistungen."
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-elevated transition-all duration-300 hover:scale-110"
      aria-label="Kontakt über WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
}
