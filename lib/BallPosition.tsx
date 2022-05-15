import { Dispatch, useEffect, useState } from "react";
import { HorizontalDirection, VerticalDirection } from "../pages";
import { useInterval } from "./useInterval";

export const framesPerSeconds = (expected: number) => 1000 / expected;

export const useBallPosition = (
  verticalDirection: VerticalDirection,
  horizontalDirection: HorizontalDirection,
  setVerticalDirection: Dispatch<VerticalDirection>,
  setHorizontalDirection: Dispatch<HorizontalDirection>
) => {
  const [positionFromLeft, setPositionFromLeft] = useState(50);
  const [positionFromTop, setPositionFromTop] = useState(0);

  // needs to match the ball hitbox
  const EDGES = {
    left: 0,
    right: 95,
    top: -2,
    bottom: 95,
  };

  const ballSpeed = 99;

  useEffect(() => {
    if (positionFromTop === EDGES.bottom) {
      console.log("perdu !");
    }
  }, [EDGES.bottom, positionFromTop]);

  const randomMovement = (negative = false) => {
    const rndNumber = 1 / (100 - ballSpeed);
    return negative ? -rndNumber : rndNumber;
  };

  const moveTheBallHorizontally = () => {
    const isLeftEdge = positionFromLeft <= EDGES.left;
    const isRightEdge = positionFromLeft >= EDGES.right;

    if (isRightEdge) {
      setHorizontalDirection && setHorizontalDirection("LEFT");
      setPositionFromLeft(positionFromLeft - randomMovement());
      return;
    }

    if (isLeftEdge) {
      setHorizontalDirection && setHorizontalDirection("RIGHT");
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
      setVerticalDirection && setVerticalDirection("UP");
      setPositionFromTop(positionFromTop - randomMovement());
      return;
    }
    if (isAtTheTopEdge) {
      setVerticalDirection && setVerticalDirection("DOWN");
      setPositionFromTop(positionFromTop + 1);
      return;
    }
    setPositionFromTop(
      positionFromTop +
        (verticalDirection === "DOWN" ? randomMovement() : randomMovement(true))
    );
  };

  useInterval(() => {
    moveTheBallHorizontally();
    moveTheBallVertically();
  }, framesPerSeconds(60));

  return {
    positionFromTop,
    positionFromLeft,
  };
};
