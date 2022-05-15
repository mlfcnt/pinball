import { Dispatch } from "react";

export const handleKeyDown = (
  code: string,
  puckPositionFromLeft: number,
  setPuckPositionFromLeft: Dispatch<number>
) => {
  const puckSpeed = 10;
  switch (code) {
    case "ArrowRight":
      setPuckPositionFromLeft(puckPositionFromLeft + puckSpeed);
      break;
    case "ArrowLeft":
      setPuckPositionFromLeft(puckPositionFromLeft - puckSpeed);
      break;
    default:
      break;
  }
};
