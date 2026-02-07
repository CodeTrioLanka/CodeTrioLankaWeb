import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

        const initialTheme = (savedTheme as "light" | "dark") || systemTheme;
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <motion.button
                onClick={toggleTheme}
                className="relative flex items-center justify-center w-14 h-14 rounded-full bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0, rotate: -90, scale: 0 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Moon className="w-6 h-6 text-primary" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0, rotate: 90, scale: 0 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Sun className="w-6 h-6 text-gold" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default ThemeToggle;
