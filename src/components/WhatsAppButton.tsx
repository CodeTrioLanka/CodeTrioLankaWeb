import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/94714257207"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;