import { useEffect } from "react";
import confetti from "canvas-confetti";
import FloatingHearts from "../FloatingHearts";

const CelebrationScene = () => {
  useEffect(() => {
    // Fire confetti bursts
    const fire = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e74c7a", "#f5a0b8", "#ff6b9d", "#ffd700", "#ff4081"],
      });
    };
    fire();
    const t1 = setTimeout(fire, 500);
    const t2 = setTimeout(fire, 1200);
    const t3 = setTimeout(fire, 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center gradient-celebration relative overflow-hidden">
      <FloatingHearts count={30} rain />
      <div className="z-20 flex flex-col items-center gap-6 text-center px-4">
        <span className="animate-big-heart-beat text-8xl md:text-[10rem] drop-shadow-xl">
          ❤️
        </span>
        <p className="font-romantic text-4xl md:text-7xl text-primary-foreground text-glow">
          Yay!!! I Love You Forever ❤️
        </p>
        <p className="text-lg md:text-2xl text-primary-foreground/80 font-light mt-2">
          You just made my heart the happiest!
        </p>
      </div>
    </div>
  );
};

export default CelebrationScene;
