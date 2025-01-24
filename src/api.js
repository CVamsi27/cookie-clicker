export const clickButton = async (userId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/click/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
};

export const getUserData = async (userId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user/${userId}`);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
};
