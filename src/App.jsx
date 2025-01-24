import ScoreBoard from "./components/ScoreBoard";
import CookieButton from "./components/CookieButton";
import useGameLogic from "./hooks/useGameLogic";
import { ToastContainer } from "react-toastify";
import getUserId from "./utils/getUserId";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const userId = getUserId();

function App() {
  const { score, prizes, handleClick } = useGameLogic(userId);
  return (
    <div className="container">
      <h1 className="title">Cookie Clicker</h1>
      <CookieButton onClick={handleClick} />
      <ScoreBoard score={score} prizes={prizes} />
      <ToastContainer />
    </div>
  );
}

export default App;
