import { useState, useEffect } from "react";
import { clickButton, getUserData } from "../api";
import { toast } from "react-toastify";

const useGameLogic = (userId) => {
  const [score, setScore] = useState(0);
  const [prizes, setPrizes] = useState(0);

  useEffect(() => {
    getUserData(userId).then((data) => {
      setScore(data.score);
      setPrizes(data.prizes);
    });
  }, [userId]);

  const handleClick = async () => {
    const result = await clickButton(userId);
    setScore(result.score);
    setPrizes(result.prizes);
    toast.success(`+${result.gained} points!`);
    if (result.wonPrize) toast.warn("You won a prize!");
  };

  return { score, prizes, handleClick };
};

export default useGameLogic;
