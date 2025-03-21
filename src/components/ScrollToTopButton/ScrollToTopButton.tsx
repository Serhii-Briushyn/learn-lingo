import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    setScrollProgress(progress);
    setIsVisible(scrollTop > 100);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circumference = 2 * Math.PI * 45;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="fixed bottom-10 right-10 cursor-pointer w-12 h-12 bg-[#e9e9e9] rounded-full flex items-center justify-center z-1000"
        >
          <svg width={"50px"} height={"50px"} viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="var(--color-accent)"
              strokeWidth="5"
              fill="none"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset:
                  circumference - (circumference * scrollProgress) / 100,
                transition: "stroke-dashoffset 0.2s ease-out",
              }}
            />
          </svg>

          <AiOutlineArrowUp
            size={"20px"}
            style={{
              position: "absolute",
              color: `var(--color-accent)`,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
