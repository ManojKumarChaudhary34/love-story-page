import { useMemo } from "react";

interface FloatingHeartsProps {
  count?: number;
  rain?: boolean;
}

const FloatingHearts = ({ count = 15, rain = false }: FloatingHeartsProps) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 20,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={rain ? "animate-heart-rain" : "animate-float-heart"}
          style={{
            position: "absolute",
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
