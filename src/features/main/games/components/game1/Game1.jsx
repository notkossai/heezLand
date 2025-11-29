import { useState } from 'react';
import { useCoin } from '../../../../../../contexts/coins/CoinContext';
import { useGame1 } from '../../../../../../contexts/games';
import './game1.css';
import mockBins from './mockBins';
import mockStages from './mockStages';

const GAME_SCREENS = {
  WELCOME: 'welcome',
  STAGES: 'stages',
  DETAILS: 'details',
  GAMEPLAY: 'gameplay',
  RESULT: 'result'
};

export default function Game1() {
  const [screen, setScreen] = useState(GAME_SCREENS.WELCOME);
  const [selectedStage, setSelectedStage] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [score, setScore] = useState(0);
  const [correctItems, setCorrectItems] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  const { earnCoins } = useCoin();
  const { addRecyclable, completeGame } = useGame1();

  const startGame = () => setScreen(GAME_SCREENS.STAGES);

  const selectStage = (stage) => {
    setSelectedStage(stage);
    setScreen(GAME_SCREENS.DETAILS);
  };

  const startStage = () => {
    setCurrentItem(mockBins[Math.floor(Math.random() * mockBins.length)]);
    setScreen(GAME_SCREENS.GAMEPLAY);
    setScore(0);
    setCorrectItems([]);
  };

  const handleBinSelect = (binType) => {
    if (currentItem.correctBin === binType) {
      setScore(prev => prev + 10);
      setCorrectItems(prev => [...prev, currentItem.name]);
      addRecyclable(currentItem.name);
      
      setTimeout(() => {
        if (correctItems.length >= 4) {
          finishStage(true);
        } else {
          setCurrentItem(mockBins[Math.floor(Math.random() * mockBins.length)]);
        }
      }, 500);
    }
  };

  const finishStage = (success) => {
    if (success) {
      const coins = score * 2;
      earnCoins(coins, `Completed ${selectedStage.name}`);
      completeGame();
    }
    setScreen(GAME_SCREENS.RESULT);
  };

  const playAgain = () => {
    setScreen(GAME_SCREENS.WELCOME);
    setSelectedStage(null);
    setScore(0);
  };

  return (
    <div className="game1-page">
      <button 
        className={`game1-btn game1-btn--sound ${!soundEnabled ? 'game1-btn--muted' : ''}`}
        onClick={() => setSoundEnabled(!soundEnabled)}
      >
        {soundEnabled ? '🔊' : '🔇'}
      </button>

      {screen === GAME_SCREENS.WELCOME && (
        <div className="game1-screen game1-screen__welcome">
          <h1>♻️ Sorting Master</h1>
          <p className="game1-screen__subtitle">Learn to recycle by sorting trash into the right bins!</p>
          <button className="game1-btn game1-btn--primary" onClick={startGame}>
            Start Game 🚀
          </button>
        </div>
      )}

      {screen === GAME_SCREENS.STAGES && (
        <div className="game1-screen">
          <div className="game1-screen__header">
            <h2 className="game1-screen__title">Choose a Stage</h2>
            <button className="game1-btn game1-btn--danger" onClick={() => setScreen(GAME_SCREENS.WELCOME)}>
              Back
            </button>
          </div>
          <div className="game1-stages">
            {mockStages.map(stage => (
              <div 
                key={stage.id} 
                className="game1-stage-card"
                onClick={() => selectStage(stage)}
              >
                <div className="game1-stage-card__info">
                  <h3 className="game1-stage-card__title">{stage.name}</h3>
                  <p className="game1-stage-card__description">{stage.description}</p>
                </div>
                <div className="game1-stage-card__reward">
                  <span className="game1-stage-card__coins">{stage.coins}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {screen === GAME_SCREENS.DETAILS && selectedStage && (
        <div className="game1-screen game1-screen__details">
          <h2>{selectedStage.name}</h2>
          <div className="game1-details-box">
            <p>{selectedStage.fullDescription}</p>
            <p><strong>🪙 Reward:</strong> {selectedStage.coins} coins</p>
            <p><strong>⭐ Difficulty:</strong> {selectedStage.difficulty}</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="game1-btn game1-btn--primary" onClick={startStage}>
              Play Stage ▶️
            </button>
            <button className="game1-btn game1-btn--secondary" onClick={() => setScreen(GAME_STAGES.STAGES)}>
              Back
            </button>
          </div>
        </div>
      )}

      {screen === GAME_SCREENS.GAMEPLAY && currentItem && (
        <div className="game1-screen__gameplay">
          <div className="game1-gameplay__header">
            <h3 className="game1-gameplay__title">{selectedStage.name}</h3>
            <div className="game1-stats">
              <div className="game1-stats__group">
                <span className="game1-stats__label">Score:</span>
                <span className="game1-stats__value">{score}</span>
              </div>
              <div className="game1-stats__group">
                <span className="game1-stats__label">Items: {correctItems.length}/5</span>
              </div>
            </div>
          </div>

          <div className="game1-gameplay__middle">
            <div className="game1-character-message">
              <span className="game1-character-message__icon">🤖</span>
              <span>Where should this go?</span>
            </div>
            <div className="game1-trash-element">
              <div className="game1-trash-item">
                {currentItem.icon} {currentItem.name}
              </div>
            </div>
          </div>

          <div className="game1-gameplay__bottom">
            {mockBins.map(bin => (
              <div 
                key={bin.type}
                className={`game1-bin ${bin.type === currentItem.correctBin ? 'game1-bin--active' : ''}`}
                onClick={() => handleBinSelect(bin.type)}
              >
                <div className="game1-bin__icon">{bin.icon}</div>
                <div className="game1-bin__label">{bin.type}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {screen === GAME_SCREENS.RESULT && (
        <div className="game1-screen">
          <div className="game1-result">
            <h2 className="game1-result__title">
              {correctItems.length >= 4 ? '🎉 Great Job!' : '💪 Good Try!'}
            </h2>
            <p className="game1-result__message">
              You sorted {correctItems.length} items correctly!
            </p>
            <p className="game1-result__score">
              {score * 2} Coins Earned!
            </p>
            <div className="game1-result__buttons">
              <button className="game1-btn game1-btn--primary" onClick={() => selectStage(selectedStage)}>
                Replay 🔄
              </button>
              <button className="game1-btn game1-btn--secondary" onClick={() => setScreen(GAME_SCREENS.STAGES)}>
                Next Stage ⭐
              </button>
              <button className="game1-btn game1-btn--danger" onClick={playAgain}>
                Home 🏠
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
