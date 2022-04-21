const Player = (props) => {
  return (
    <div style={{ border: "2px solid white", marginTop: 20 }}>
      <h3>
        Player: {props.name} - Score: {props.score}
      </h3>
      <button onClick={() => props.increaseScore(props.id)}>+</button>
    </div>
  );
};

export default Player;
