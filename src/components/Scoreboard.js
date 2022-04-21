import { useState } from "react";
import Player from "./Player";

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Norman", score: 1 },
    { id: 2, name: "Panos", score: 8 },
    { id: 3, name: "Wilson", score: 10 },
    { id: 4, name: "Ana", score: 13 },
  ]);

  const increaseScore = (idToIncrease) => {
    // Who we need to increase?
    // get some id in this function?
    // how?

    // Objective: increase score of one player
    // 1. an id
    // 2. players array
    const updatedPlayers = players.map((p) => {
      if (p.id === idToIncrease) {
        return { id: p.id, name: p.name, score: p.score + 1 };
      } else {
        return p;
      }
    });
    setPlayers(updatedPlayers);
    // console.log("Im in the parent!! who's this?", idToIncrease);
  };

  const sortedArray = [...players].sort((a, b) => b.score - a.score);
  return (
    <div>
      <h1>Class 58 Scores!</h1>
      <div>
        {sortedArray.map((p) => (
          <Player
            name={p.name}
            score={p.score}
            id={p.id}
            key={p.id}
            increaseScore={increaseScore}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;

// .map
// .find
// { id: 1, name: "Norman", score: 1 },
