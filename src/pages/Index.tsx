import { useState, useEffect, useCallback } from "react";
import LoaderScene from "@/components/scenes/LoaderScene";
import SlideshowScene from "@/components/scenes/SlideshowScene";
import WishingCardScene from "@/components/scenes/WishingCardScene";
import ProposalScene from "@/components/scenes/ProposalScene";
import CelebrationScene from "@/components/scenes/CelebrationScene";

type Scene = "loader" | "slideshow" | "wishing" | "proposal" | "celebration";

const Index = () => {
  const [scene, setScene] = useState<Scene>("loader");
  const [fadeOut, setFadeOut] = useState(false);

  const transition = useCallback((next: Scene) => {
    setFadeOut(true);
    setTimeout(() => {
      setScene(next);
      setFadeOut(false);
    }, 600);
  }, []);

  useEffect(() => {
    if (scene === "loader") {
      const timer = setTimeout(() => transition("slideshow"), 2500);
      return () => clearTimeout(timer);
    }
  }, [scene, transition]);

  const handleSlideshowComplete = useCallback(() => {
    transition("wishing");
  }, [transition]);

  const handleWishingComplete = useCallback(() => {
    transition("proposal");
  }, [transition]);

  const handleYes = useCallback(() => {
    transition("celebration");
  }, [transition]);

  return (
    <div
      className="h-screen w-screen overflow-hidden relative"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
      }}
    >
      {scene === "loader" && <LoaderScene />}
      {scene === "slideshow" && (
        <SlideshowScene onComplete={handleSlideshowComplete} />
      )}
      {scene === "wishing" && (
        <WishingCardScene onComplete={handleWishingComplete} />
      )}
      {scene === "proposal" && <ProposalScene onYes={handleYes} />}
      {scene === "celebration" && <CelebrationScene />}
    </div>
  );
};

export default Index;
