import { useState, useEffect, useContext } from "react";
import { Game1Context } from "../../../../../../contexts/games";
import "./game1.css";

import bins from "./mockBins";
import messages from "./mockMessages";
import stages from "./mockStages";



export default function Game1() {

    const { 
        completedStages, 
        setCompletedStages, 
        soundOn, 
        setSoundOn,  
        } = useContext(Game1Context);
  

  const [screen, setScreen] = useState(1);
  const [selectedStage, setSelectedStage] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [hintsLeft, setHintsLeft] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [currentTrashIndex, setCurrentTrashIndex] = useState(0);
  const [draggedItem, setDraggedItem] = useState(null);


    const handleResetProgress = () => {
    const confirmed = window.confirm(
      "Are you sure you want to restart your progress? This cannot be undone."
    );
    if (confirmed) {
      localStorage.removeItem("game1Progress");
      setCompletedStages([]);
      setSoundOn(true);
    }
  };

  // Screen 1: Start Screen
  const Screen1 = () => (
    <div className="screen screen-1">
      <h1>Recycling Master</h1>
      <button
        className="btn-primary"
        onClick={() => {
          setScreen(2);
        }}
      >
        Start Game
      </button>
      <button className="sound-toggle" onClick={() => setSoundOn(!soundOn)}>
        🔊 Sound: {soundOn ? "ON" : "OFF"}
      </button>
      {completedStages.length > 0 && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p style={{ color: "#666", fontSize: "1.1em" }}>
            Stages Completed: {completedStages.length}/{stages.length}
          </p>
          <button className="btn-reset" onClick={handleResetProgress}>
            🔄 Reset Progress
          </button>
        </div>
      )}
    </div>
  );

  // Screen 2: Stages List
  const Screen2 = () => (
    <div className="screen screen-2">
      <div className="screen-header">
        <button className="btn-back" onClick={() => setScreen(1)}>
          ← Back
        </button>
        <h2>Choose Stage</h2>
        <button className="sound-toggle" onClick={() => setSoundOn(!soundOn)}>
          🔊 {soundOn ? "ON" : "OFF"}
        </button>
      </div>
      <div className="stages-list">
        {stages.map(stage => {
          const isLocked = stage.id !== 1 && !completedStages.includes(stage.id - 1);
          return (
            <div
              key={stage.id}
              className={`stage-card ${isLocked ? "locked" : ""}`}
              onClick={() => {
                if (!isLocked) {
                  setSelectedStage(stage);
                  setScreen(3);
                } else {
                  alert("You need to finish the previous stage!");
                }
              }}
            >
              <div className="stage-info">
                <h3>{stage.name}</h3>
                <p>Collect: {stage.correctNeeded} items</p>
              </div>
              <div className="stage-coins">
                {isLocked ? (
                  <p>🔒 Locked</p>
                ) : completedStages.includes(stage.id) ? (
                  <p>✅ Completed</p>
                ) : (
                  <p>💰 {stage.coins} coins</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Screen 3: Stage Details
  const Screen3 = () => (
    <div className="screen screen-3">
      <button className="btn-back" onClick={() => setScreen(2)}>
        ← Back
      </button>
      <h2>{selectedStage.name}</h2>
      <div className="stage-details">
        <p>
          <strong>Collect:</strong> {selectedStage.correctNeeded} items
        </p>
        <p>
          <strong>Max Mistakes:</strong> {selectedStage.maxMistakes}
        </p>
        <p>
          <strong>Hints:</strong> {selectedStage.hints}
        </p>
        <p>
          <strong>Coins:</strong> 💰 {selectedStage.coins}
        </p>
      </div>
      <button
        className="btn-primary"
        onClick={() => {
          setCorrect(0);
          setMistakes(0);
          setHintsLeft(selectedStage.hints);
          setCurrentTrashIndex(0);
          setGameResult(null);
          setStartTime(Date.now());
          setScreen(4);
        }}
      >
        Start
      </button>
    </div>
  );

  // Screen 4: Gameplay
// Screen 4: Gameplay
const Screen4 = () => {
  useEffect(() => {
    if (correct >= selectedStage.correctNeeded) {
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);
      setGameResult({ type: "win", time: timeTaken, mistakes });
      
      // Update completedStages and save immediately
      const updatedStages = [...completedStages, selectedStage.id];
      setCompletedStages(updatedStages);
      
      // Also save to localStorage directly to ensure it persists
      const progress = {
        completedStages: updatedStages,
        soundOn,
        lastSavedAt: new Date().toISOString(),
      };
      localStorage.setItem("gameProgress", JSON.stringify(progress));
      
      setScreen(5);
    } else if (mistakes >= selectedStage.maxMistakes) {
      setGameResult({ type: "lose", mistakes });
      setScreen(5);
    }
  }, [correct, mistakes]);

    const handleDragStart = (e, trash) => {
      setDraggedItem(trash);
      e.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
    };

    const handleDrop = (e, binId) => {
      e.preventDefault();
      e.stopPropagation();

      if (!draggedItem) return;

      const trash = draggedItem;
      if (trash.bin === binId) {
        const newCorrect = correct + 1;
        setCorrect(newCorrect);
        setCurrentTrashIndex((currentTrashIndex + 1) % selectedStage.trash.length);
      } else {
        setMistakes(mistakes + 1);
      }
      setDraggedItem(null);
    };

    const trash = selectedStage.trash[currentTrashIndex];
    const currentMessage =
      correct < 3
        ? messages.start
        : correct < selectedStage.correctNeeded - 2
        ? messages.winning
        : mistakes >= selectedStage.maxMistakes - 1
        ? messages.losing
        : messages.finish.replace("{needed}", selectedStage.correctNeeded);

    return (
      <div className="screen screen-4">
        <div className="screen-4-top">
          <button className="btn-back" onClick={() => setScreen(3)}>
            ← Back
          </button>
          <h2>{selectedStage.name}</h2>
          <button
            className="btn-restart"
            onClick={() => {
              setCorrect(0);
              setMistakes(0);
              setHintsLeft(selectedStage.hints);
              setCurrentTrashIndex(0);
              setDraggedItem(null);
            }}
          >
            🔄 Restart
          </button>
        </div>

        <div className="screen-4-middle">
          <div className="character-message">
            <span>👨</span> <span>"{currentMessage}"</span>
          </div>

          <div className="trash-element">
            <div
              draggable="true"
              onDragStart={(e) => handleDragStart(e, trash)}
              onDragEnd={() => setDraggedItem(null)}
              className={`trash-item ${draggedItem?.id === trash.id ? "dragging" : ""}`}
            >
              🗑️ {trash.name}
            </div>
          </div>
        </div>

        <div className="screen-4-bottom">
          <div className="stats-left">
            <button className="sound-toggle" onClick={() => setSoundOn(!soundOn)}>
              🔊 {soundOn ? "ON" : "OFF"}
            </button>
            <button
              className="btn-hint"
              onClick={() => {
                if (hintsLeft > 0) {
                  setHintsLeft(hintsLeft - 1);
                  alert(`Hint: Sort this in the ${trash.bin} bin!`);
                }
              }}
              disabled={hintsLeft === 0}
            >
              💡 Hints: {hintsLeft}
            </button>
            <p className="correct-count">
              {correct}/{selectedStage.correctNeeded}
            </p>
          </div>

          <div className="bins-grid">
            {bins.slice(0, selectedStage.bins).map(bin => (
              <div
                key={bin.id}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, bin.id)}
                className={`bin ${draggedItem ? "active" : ""}`}
              >
                <div className="bin-icon">🟦</div>
                <p>{bin.label}</p>
              </div>
            ))}
          </div>

          <div className="stats-right">
            <p className="mistakes-count">Mistakes: {mistakes}</p>
          </div>
        </div>
      </div>
    );
  };

  // Screen 5: Result
  const Screen5 = () => (
    <div className="screen screen-5">
      {gameResult.type === "win" ? (
        <div className="result-window">
          <h1>🎉 YOU WON! 🎉</h1>
          <p>Time: {gameResult.time} seconds</p>
          <p>Mistakes: {gameResult.mistakes}</p>
          <div className="result-buttons">
            <button
              className="btn-primary"
              onClick={() => {
                const nextStageId = selectedStage.id + 1;
                if (nextStageId <= stages.length) {
                  setSelectedStage(stages[nextStageId - 1]);
                  setScreen(3);
                } else {
                  alert("Congratulations! You completed all stages!");
                  setScreen(2);
                }
              }}
            >
              Next Stage
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                setCorrect(0);
                setMistakes(0);
                setHintsLeft(selectedStage.hints);
                setCurrentTrashIndex(0);
                setGameResult(null);
                setStartTime(Date.now());
                setScreen(4);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
        <div className="result-window">
          <h1>😢 YOU LOST!</h1>
          <p>Mistakes: {gameResult.mistakes}/{selectedStage.maxMistakes}</p>
          <button
            className="btn-primary"
            onClick={() => {
              setCorrect(0);
              setMistakes(0);
              setHintsLeft(selectedStage.hints);
              setCurrentTrashIndex(0);
              setGameResult(null);
              setStartTime(Date.now());
              setScreen(4);
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );

  return (
    <main className="games-page">
      {screen === 1 && <Screen1 />}
      {screen === 2 && <Screen2 />}
      {screen === 3 && selectedStage && <Screen3 />}
      {screen === 4 && selectedStage && <Screen4 />}
      {screen === 5 && gameResult && <Screen5 />}
    </main>
  );
}
