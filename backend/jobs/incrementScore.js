import User from "../models/User.js";

export const incrementScore = async (userId) => {
  const random = Math.random();
  let points = 1;
  let prize = 0;

  if (random < 0.25) prize = 1;
  else if (random < 0.5) points += 9;

  try {
    const user = await User.findOneAndUpdate(
      { userId },
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
  } catch (e) {
    console.error(JSON.stringify(e));
  }
};
