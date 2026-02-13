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
        setTimeout(onComplete, 10000);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <FloatingHearts count={12} />
      <div className="z-20 glass-card rounded-3xl px-8 py-12 md:px-16 md:py-16 max-w-md md:max-w-96 mx-4 text-center">
        <p className="font-romantic text-2xl  text-primary text-glow mb-6">
          तिमी मेरो आज मात्र होइन, मेरो भोलि पनि हौ। जुन दिनसम्म सास चल्छ, त्यो
          दिनसम्म तिमीलाई माया गर्ने वाचा गर्छु। सुख–दुःख जे आए पनि तिम्रो हात
          कहिल्यै छोड्ने छैन। तिमी मेरो सपना हौ, मेरो शान्ति हौ, मेरो सधैंको साथ
          हौ। यो भ्यालेन्टाइन डे मा वाचा गर्छु — जिन्दगीभर तिम्रो मुस्कानको कारण
          बन्नेछु। 
        </p>
        <p className="font-romantic text-3xl text-primary mb-8">
         Happy Valentine's Day My Love ❤️
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
