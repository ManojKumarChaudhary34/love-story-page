import { useState, useCallback, useRef } from "react";
import FloatingHearts from "../FloatingHearts";

interface ProposalSceneProps {
  onYes: () => void;
}

const ProposalScene = ({ onYes }: ProposalSceneProps) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [moved, setMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    setNoPos({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
    });
    setMoved(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex h-screen w-screen items-center justify-center bg-background relative"
    >
      <FloatingHearts count={10} />
      <div className="z-20 flex flex-col items-center gap-8 md:gap-10">
        <p className="font-romantic text-5xl md:text-7xl text-primary text-glow text-center px-4">
          ❤️ Will you be my Valentine? ❤️
        </p>

        <div className="flex gap-6 items-center relative">
          <button
            onClick={onYes}
            className="gradient-romantic text-primary-foreground font-semibold text-lg md:text-xl px-10 py-4 rounded-2xl shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            ✅ Yes!
          </button>

          <button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            className="border-2 border-primary text-primary font-semibold text-lg md:text-xl px-10 py-4 rounded-2xl transition-all duration-150"
            style={{
              transform: moved
                ? `translate(${noPos.x}px, ${noPos.y}px)`
                : "none",
              position: moved ? "fixed" : "relative",
              zIndex: 50,
            }}
          >
            ❌ No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalScene;
