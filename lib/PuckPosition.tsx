import { useState } from "react";

const puckPositionFromTop = 90;

export const usePuckPosition = () => {
  const [puckPositionFromLeft, setPuckPositionFromLeft] = useState(0);
  return {
    puckPositionFromLeft,
    setPuckPositionFromLeft,
    puckPositionFromTop,
  };
};
