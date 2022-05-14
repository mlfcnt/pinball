import { useState } from "react";
import { useInterval } from "react-use";

export const framesPerSeconds = (expected: number) => 1000 / expected;

type VerticalDirection = "UP" | "DOWN";
type HorizontalDirection = "LEFT" | "RIGHT";

export const useBallPosition = () => {
  const [positionFromLeft, setPositionFromLeft] = useState(0);
  const [positionFromTop, setPositionFromTop] = useState(0);
  const [verticalDirection, setVerticalDirection] =
    useState<VerticalDirection>("DOWN");
  const [horizontalDirection, setHorizontalDirection] =
    useState<HorizontalDirection>("RIGHT");

  const EDGES = {
    left: 0,
    right: 95,
    top: 0,
    bottom: 95,
  };

  const ballSpeed = 99;

  const randomMovement = (negative = false) => {
    const rndNumber = 1 / (100 - ballSpeed);
    return negative ? -rndNumber : rndNumber;
  };

  const moveTheBallHorizontally = () => {
    const isLeftEdge = positionFromLeft <= EDGES.left;
    const isRightEdge = positionFromLeft >= EDGES.right;

    if (isRightEdge) {
      setHorizontalDirection("LEFT");
      setPositionFromLeft(positionFromLeft - randomMovement());
      return;
    }

    if (isLeftEdge) {
      setHorizontalDirection("RIGHT");
      setPositionFromLeft(positionFromLeft + randomMovement());
      return;
    }

    setPositionFromLeft(
      positionFromLeft +
        (horizontalDirection === "RIGHT"
          ? randomMovement()
          : randomMovement(true))
    );
  };
  const moveTheBallVertically = () => {
    const isAtTheTopEdge = positionFromTop <= EDGES.top;
    const isAtTheBottomEdge = positionFromTop >= EDGES.bottom;
    if (isAtTheBottomEdge) {
      setVerticalDirection("UP");
      setPositionFromTop(positionFromTop - randomMovement());
      return;
    }
    if (isAtTheTopEdge) {
      setVerticalDirection("DOWN");
      setPositionFromTop(positionFromTop + 1);
      return;
    }
    setPositionFromTop(
      positionFromTop +
        (verticalDirection === "DOWN" ? randomMovement() : randomMovement(true))
    );
  };

  useInterval(() => {
    moveTheBallVertically();
    moveTheBallHorizontally();
  }, framesPerSeconds(40));

  return {
    positionFromTop,
    positionFromLeft,
  };
};
