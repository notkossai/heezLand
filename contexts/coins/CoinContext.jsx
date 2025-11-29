import React, { createContext, useState, useCallback } from 'react';

export const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coins, setCoins] = useState(0);
  const [totalEarned, setTotalEarned] = useState(0);
  const [achievements, setAchievements] = useState([]);

  // Add coins for completing activities
  const earnCoins = useCallback((amount, activity) => {
    setCoins(prev => prev + amount);
    setTotalEarned(prev => prev + amount);
    
    // Track achievement
    setAchievements(prev => [...prev, {
      id: Date.now(),
      activity,
      amount,
      timestamp: new Date(),
      icon: '🪙'
    }]);

    // Show notification (optional)
    console.log(`🎉 Earned ${amount} coins for: ${activity}`);
  }, []);

  // Deduct coins (for rewards/purchases)
  const spendCoins = useCallback((amount, reward) => {
    if (coins >= amount) {
      setCoins(prev => prev - amount);
      return true;
    }
    return false;
  }, [coins]);

  // Reset (for testing)
  const resetCoins = useCallback(() => {
    setCoins(0);
    setTotalEarned(0);
    setAchievements([]);
  }, []);

  const value = {
    coins,
    totalEarned,
    achievements,
    earnCoins,
    spendCoins,
    resetCoins
  };

  return (
    <CoinContext.Provider value={value}>
      {children}
    </CoinContext.Provider>
  );
}

export function useCoin() {
  const context = React.useContext(CoinContext);
  if (!context) {
    throw new Error('useCoin must be used within CoinProvider');
  }
  return context;
}
