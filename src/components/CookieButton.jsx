import { useState } from "react";
import cookieImg from "../assets/cookie.png";

// eslint-disable-next-line react/prop-types
const CookieButton = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    await onClick();
  };

  return (
    <img
      src={cookieImg}
      alt="Cookie"
      className={`cookie ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    />
  );
};

export default CookieButton;
