import FloatingHearts from "../FloatingHearts";

const LoaderScene = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center gradient-romantic">
      <FloatingHearts count={10} />
      <div className="z-20 flex flex-col items-center gap-6">
        <span className="animate-pulse-heart text-7xl md:text-9xl drop-shadow-lg">
          ❤️
        </span>
        <p className="font-romantic text-3xl md:text-5xl text-primary-foreground text-glow">
          Loading Our Love…
        </p>{" "}
        <button
          onClick={onStart}
          className="gradient-romantic text-primary-foreground font-semibold text-lg md:text-xl px-10 py-4 rounded-2xl shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
        >
           Tap to start ❤️
        </button>
      </div>
    </div>
  );
};

export default LoaderScene;
