import { useEffect, useState } from "react";
import { HorizontalDirection, VerticalDirection } from "../pages";
import { useBallPosition } from "./BallPosition";
import { usePuckPosition } from "./PuckPosition";

export const usePositions = () => {
  const [verticalDirection, setVerticalDirection] =
    useState<VerticalDirection>("UP");
  const [horizontalDirection, setHorizontalDirection] =
    useState<HorizontalDirection>("RIGHT");
  const { positionFromTop: ballPosFromTop, positionFromLeft: ballPosFromLeft } =
    useBallPosition(
      verticalDirection,
      horizontalDirection,
      setVerticalDirection,
      setHorizontalDirection
    );
  const { puckPositionFromLeft, setPuckPositionFromLeft, puckPositionFromTop } =
    usePuckPosition();

  useEffect(() => {
    if (
      ballPosFromTop === puckPositionFromTop &&
      (ballPosFromLeft - puckPositionFromLeft === 0 ||
        // magie noire
        (puckPositionFromLeft - ballPosFromLeft <= -34 &&
          puckPositionFromLeft - ballPosFromLeft >= -60))
    ) {
      setVerticalDirection(verticalDirection === "UP" ? "DOWN" : "UP");
    }
  }, [
    ballPosFromLeft,
    ballPosFromTop,
    puckPositionFromLeft,
    setPuckPositionFromLeft,
    setVerticalDirection,
  ]);

  return {
    ballPosFromLeft,
    ballPosFromTop,
    puckPositionFromLeft,
    puckPositionFromTop,
    setPuckPositionFromLeft,
  };
};
