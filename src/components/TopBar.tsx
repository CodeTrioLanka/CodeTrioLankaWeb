import { Youtube, Sparkles, Phone } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="w-full bg-white border-b border-border py-2 hidden md:block">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>
            YOUR DREAM | OUR DESIGN -
            <a href="#contact" className="text-secondary hover:underline font-bold transition-colors">
              Get Started Today
            </a>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[13px] font-bold text-foreground">
            <a
              href="https://wa.me/94714257207"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              +94 71 425 7207
            </a>
          </div>

          <div className="group relative">
            <a
              href="https://www.youtube.com/channel/UCrqV2yYSm91HXwQ10o34RZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-red-600 transition-colors border border-border rounded-md px-3 py-1 bg-white hover:bg-muted/50"
            >
              <Youtube className="w-4 h-4" />

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
