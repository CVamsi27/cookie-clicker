const getUserId = () => {
  let userId = localStorage.getItem("user_id");

  if (!userId) {
    userId = `user-${crypto.randomUUID()}`;
    localStorage.setItem("user_id", userId);
  }

  return userId;
};

export default getUserId;
