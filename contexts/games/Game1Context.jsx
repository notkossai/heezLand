import React, { createContext, useState, useCallback } from 'react';

export const Game1Context = createContext();

export function Game1Provider({ children }) {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [recyclables, setRecyclables] = useState([]);

  const addRecyclable = useCallback((item) => {
    setRecyclables(prev => [...prev, item]);
    setScore(prev => prev + 10);
  }, []);

  const levelUp = useCallback(() => {
    setLevel(prev => prev + 1);
    setScore(prev => prev + 50);
  }, []);

  const completeGame = useCallback(() => {
    setCompleted(true);
    setScore(prev => prev + 100);
  }, []);

  const value = {
    score,
    level,
    completed,
    recyclables,
    addRecyclable,
    levelUp,
    completeGame
  };

  return (
    <Game1Context.Provider value={value}>
      {children}
    </Game1Context.Provider>
  );
}

export function useGame1() {
  const context = React.useContext(Game1Context);
  if (!context) {
    throw new Error('useGame1 must be used within Game1Provider');
  }
  return context;
}