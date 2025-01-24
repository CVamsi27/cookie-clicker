import User from "../models/User.js";

export const getUserData = async (userId) => {
  try {
    let user = await User.findOne({ userId });

    if (!user) {
      user = new User({
        userId: userId,
        score: 0,
        prizes: 0,
      });
      await user.save();
    }

    return user;
  } catch (e) {
    console.error(JSON.stringify(e));
  }
};
