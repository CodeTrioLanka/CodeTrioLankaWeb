import { Youtube, Sparkles, Phone, Facebook } from "lucide-react";

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

          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61586191610766"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-[#1877F2] transition-colors border border-border rounded-md px-2 py-1 bg-white hover:bg-muted/50"
              title="Follow us on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCrqV2yYSm91HXwQ10o34RZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-[#FF0000] transition-colors border border-border rounded-md px-2 py-1 bg-white hover:bg-muted/50"
              title="Subscribe on YouTube"
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
