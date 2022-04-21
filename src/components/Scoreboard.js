import { useState } from "react";
import Player from "./Player";
import AddPlayer from "./AddPlayers";

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Norman", score: 1 },
    { id: 2, name: "Panos", score: 8 },
    { id: 3, name: "Wilson", score: 10 },
    { id: 4, name: "Ana", score: 13 },
  ]);

  const increaseScore = (idToIncrease) => {
    const updatedPlayers = players.map((p) => {
      if (p.id === idToIncrease) {
        return { id: p.id, name: p.name, score: p.score + 1 };
      } else {
        return p;
      }
    });
    setPlayers(updatedPlayers);
  };

  const createNewPlayer = (name) => {
    const newPlayer = {
      name: name,
      score: 100,
      id: players.length + 1,
    };

    // Have an array with all the players that are there + the new
    const newArray = [newPlayer, ...players];

    console.log("new Player", newArray);

    setPlayers(newArray);
  };

  const sortedArray = [...players].sort((a, b) => b.score - a.score);
  return (
    <div>
      <h1>Class 58 Scores!</h1>
      <AddPlayer createNewPlayer={createNewPlayer} />
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
