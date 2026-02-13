import { useState, useEffect } from "react";
import FloatingHearts from "../FloatingHearts";

interface WishingCardSceneProps {
  onComplete: () => void;
}

const fullText = "Every moment with you is magic.";

const WishingCardScene = ({ onComplete }: WishingCardSceneProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCaret(false), 500);
        setTimeout(onComplete, 3000);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <FloatingHearts count={12} />
      <div className="z-20 glass-card rounded-3xl px-8 py-12 md:px-16 md:py-16 max-w-md mx-4 text-center">
        <p className="font-romantic text-4xl md:text-6xl text-primary text-glow mb-6">
          Happy Valentine's Day
        </p>
        <p className="font-romantic text-3xl md:text-5xl text-primary mb-8">
          My Love ❤️
        </p>
        <div className="min-h-[2rem]">
          <span className="text-lg md:text-xl text-foreground/80 font-light">
            {displayedText}
            {showCaret && (
              <span
                className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle"
                style={{ animation: "blink-caret 0.8s step-end infinite" }}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WishingCardScene;
