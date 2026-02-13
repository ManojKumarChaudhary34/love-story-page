import FloatingHearts from "../FloatingHearts";

const LoaderScene = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center gradient-romantic">
      <FloatingHearts count={10} />
      <div className="z-20 flex flex-col items-center gap-6">
        <span className="animate-pulse-heart text-7xl md:text-9xl drop-shadow-lg">
          ❤️
        </span>
        <p className="font-romantic text-3xl md:text-5xl text-primary-foreground text-glow">
          Loading Our Love…
        </p>
      </div>
    </div>
  );
};

export default LoaderScene;
