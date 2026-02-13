import { useState, useEffect } from "react";
import FloatingHearts from "../FloatingHearts";

import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";

const images = [memory1, memory2, memory3, memory4, memory5];

const animations = [
  "animate-[fadeZoomIn_0.8s_ease-out_forwards]",
  "animate-[slideFromLeft_0.8s_ease-out_forwards]",
  "animate-[fadeZoomIn_0.8s_ease-out_forwards]",
  "animate-[slideFromRight_0.8s_ease-out_forwards]",
  "animate-[fadeZoomIn_0.8s_ease-out_forwards]",
];

interface SlideshowSceneProps {
  onComplete: () => void;
}

const SlideshowScene = ({ onComplete }: SlideshowSceneProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= images.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 1500);
          return prev;
        }
        setAnimKey((k) => k + 1);
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <FloatingHearts count={12} />
      <div className="z-20 flex flex-col items-center gap-4">
        <p className="font-romantic text-2xl md:text-4xl text-primary text-glow mb-2">
          Our Beautiful Moments ❤️
        </p>
        <div
          key={animKey}
          className="glass-card rounded-2xl p-2 md:p-3 overflow-hidden"
          style={{
            animation: "fadeZoomIn 0.8s ease-out forwards",
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Memory ${currentIndex + 1}`}
            className="h-56 w-56 md:h-80 md:w-80 rounded-xl object-cover"
          />
        </div>
        <div className="flex gap-2 mt-3">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeZoomIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes slideFromLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default SlideshowScene;
