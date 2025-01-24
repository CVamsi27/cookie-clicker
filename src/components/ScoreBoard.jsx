// eslint-disable-next-line react/prop-types
const ScoreBoard = ({ score, prizes }) => {
  return (
    <div className="scoreboard">
      <h2 className="score">Score: {score}</h2>
      <h2 className="prizes">Prizes: {prizes}</h2>
    </div>
  );
};

export default ScoreBoard;
