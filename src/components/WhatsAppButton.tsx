import { ArrowUp, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToggle = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <button
        onClick={handleScrollToggle}
        aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isAtBottom ? <ArrowUp className="w-5 h-5" /> : <ArrowDown className="w-5 h-5" />}
      </button>
      <a
        href="https://wa.me/94714257207"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        {/* WhatsApp Logo SVG */}
        <svg
          viewBox="0 0 175.216 175.552"
          className="w-10 h-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
            fill="#25D366"
          />
          <path d="M87.184 0C39.178 0 0 39.178 0 87.184c0 15.515 4.057 30.097 11.174 42.719L0 175.552l47.047-12.34c12.056 6.55 25.782 10.008 40.137 10.013h.034c48.016 0 87.194-39.183 87.194-87.194S135.2 0 87.184 0zm0 25.227c33.733 0 61.166 27.423 61.178 61.13a60.98 60.98 0 0 1-17.895 43.251 60.75 60.75 0 0 1-43.235 17.929h-.023c-10.977-.006-21.74-2.953-31.126-8.524l-2.235-1.324-23.146 6.069 6.179-22.559-1.455-2.312a60.98 60.98 0 0 1-9.349-32.535c.012-33.707 27.445-61.13 61.178-61.13zm-25.88 39.67c-1.102 0-2.887.387-4.396 1.938-1.51 1.55-5.771 5.638-5.771 13.744 0 8.106 5.908 15.932 6.73 17.034.823 1.102 11.29 18.443 28.16 25.02 13.97 5.444 16.897 4.362 19.943 4.088 3.046-.274 9.831-4.016 11.203-7.895 1.372-3.879 1.372-7.209 0.96-7.895-.412-.685-1.514-1.097-3.16-1.92-1.647-.823-9.754-4.811-11.268-5.36-1.514-.549-2.616-.823-3.718.823-1.102 1.646-4.259 5.361-5.224 6.463-0.965 1.102-1.93 1.239-3.577 0.412-1.647-.823-6.952-2.562-13.244-8.176-4.897-4.368-8.204-9.761-9.169-11.407-0.965-1.646-0.103-2.536 0.721-3.355 0.74-0.738 1.647-1.92 2.47-2.885 0.823-0.965 1.097-1.646 1.646-2.748 0.549-1.102 0.274-2.067-0.137-2.89-0.412-.823-3.642-8.927-5.087-12.16-1.372-3.07-2.799-2.748-3.718-2.885-0.823-.137-1.784-.137-2.748-.137z"
            fill="#FFFFFF"
          />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;