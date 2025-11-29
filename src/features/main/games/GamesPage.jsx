import { useState } from 'react';
import Game1 from './components/game1/Game1';
import Game2 from './components/game2/Game2';
import './games.css';

const GAMES_LIST = [
  {
    id: 1,
    name: 'Sorting Master',
    description: 'Sort trash into the right recycling bins',
    icon: '♻️',
    coins: 100,
    component: Game1
  },
  {
    id: 2,
    name: 'Recycling Quiz',
    description: 'Test your recycling knowledge',
    icon: '🌍',
    coins: 50,
    component: Game2
  }
];

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState(null);

  if (selectedGame) {
    const GameComponent = GAMES_LIST[selectedGame - 1].component;
    return (
      <div className="games-page">
        <button 
          className="games-back-btn"
          onClick={() => setSelectedGame(null)}
        >
          ← Back to Games
        </button>
        <GameComponent />
      </div>
    );
  }

  return (
    <div className="games-page">
      <div className="games-hero">
        <h1>🎮 Fun Learning Games</h1>
        <p>Learn about recycling while having fun!</p>
      </div>

      <div className="games-grid">
        {GAMES_LIST.map(game => (
          <div 
            key={game.id}
            className="game-card"
            onClick={() => setSelectedGame(game.id)}
          >
            <div className="game-card__icon">{game.icon}</div>
            <h3 className="game-card__title">{game.name}</h3>
            <p className="game-card__description">{game.description}</p>
            <div className="game-card__reward">
              <span className="game-card__coins">+🪙 {game.coins}</span>
            </div>
            <button className="game-card__button">Play Now →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
