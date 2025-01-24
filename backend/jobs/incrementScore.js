import User from "../models/User.js";

export const incrementScore = async (userId) => {
  const random = Math.random();
  let points = 1;
  let prize = 0;

  if (random < 0.5) points += 10;
  if (random < 0.25) prize = 1;

  const user = await User.findByIdAndUpdate(
    userId,
    {
      $inc: { score: points, prizes: prize },
    },
    { new: true },
  );

  return {
    score: user.score,
    prizes: user.prizes,
    gained: points,
    wonPrize: prize > 0,
  };
};
