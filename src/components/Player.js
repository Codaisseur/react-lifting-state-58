import { useState } from "react";
const Player = (props) => {
  const [score, setScore] = useState(0);

  return (
    <div style={{ border: "2px solid white", marginTop: 20 }}>
      <h3>
        Player: {props.name} - Score: {score}
      </h3>
      <button>+</button>
    </div>
  );
};

export default Player;
