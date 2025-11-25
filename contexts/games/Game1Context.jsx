import { createContext, useState, useEffect } from "react";

export const Game1Context = createContext();

export const Game1Provider = ({ children }) => {
  const [completedStages, setCompletedStages] = useState([]);
  const [soundOn, setSoundOn] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem("game1Progress");
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        setCompletedStages(progress.completedStages || []);
        setSoundOn(progress.soundOn !== undefined ? progress.soundOn : true);
      } catch (error) {
        console.error("Error loading Game1 progress:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const progress = {
        completedStages,
        soundOn,
        lastSavedAt: new Date().toISOString(),
      };
      localStorage.setItem("game1Progress", JSON.stringify(progress));
    }
  }, [completedStages, soundOn, isLoaded]);

  return (
    <Game1Context.Provider value={{ completedStages, setCompletedStages, soundOn, setSoundOn, isLoaded }}>
      {children}
    </Game1Context.Provider>
  );
};