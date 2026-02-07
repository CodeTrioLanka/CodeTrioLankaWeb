import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Zap, Shield, Sparkles, Rocket } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-20"
      style={{ minHeight: "100vh" }}
    >
      {/* Clean Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dicyqfwrf/video/upload/v1769709685/0127_1_ccgay2.mp4" type="video/mp4" />
        </video>
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ y: yText, opacity: opacityText, scale }}
          className="max-w-5xl mx-auto text-center"
        >

          {/* Main Heading with Modern Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] font-poppins"
          >
            <span className="inline-block">
              CLEAN DESIGN.
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-r from-gold via-gold-light to-secondary bg-clip-text text-transparent">
              REAL RESULTS.
            </span>
          </motion.h1>

          {/* Subtitle with better contrast */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-poppins font-light"
          >
            Transform your vision into powerful digital solutions.
            <span className="font-semibold text-gold"> We craft exceptional web experiences</span> that drive growth and innovation.
          </motion.p>

          {/* Modern CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-navy-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,193,7,0.4)] hover:scale-105 font-poppins overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-md transition-all duration-300 border-2 border-white/30 hover:border-white/50 font-poppins"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Modern Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Code, value: "10+", label: "Projects Delivered", color: "from-gold/20 to-gold/5", iconColor: "text-gold" },
              { icon: Shield, value: "100%", label: "Client Satisfaction", color: "from-secondary/20 to-secondary/5", iconColor: "text-secondary" },
              { icon: Zap, value: "2+", label: "Years Experience", color: "from-primary/20 to-primary/5", iconColor: "text-primary" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative p-6 rounded-2xl backdrop-blur-xl border border-white/20 bg-gradient-to-br ${stat.color} group cursor-pointer`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white font-poppins mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 font-poppins font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
