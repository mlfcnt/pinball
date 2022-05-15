import type { NextPage } from "next";
import { Ball } from "../components/Ball";
import { GameArea } from "../components/GameArea";
import styled from "styled-components";
import { Puck } from "../components/Puck";
import { useEffect, useState } from "react";
import { useBallPosition } from "../lib/BallPosition";

const Home: NextPage = () => {
  const {
    positionFromTop: ballPosFromTop,
    positionFromLeft: ballPosFromLeft,
    verticalDirection,
    setVerticalDirection,
  } = useBallPosition();

  const puckPositionFromTop = 90;

  const [puckPosFromLeft, setPuckPosFromLeft] = useState(0);
  const Title = styled.h1`
    text-align: center;
  `;

  useEffect(() => {
    if (
      (ballPosFromLeft === puckPosFromLeft + 10 ||
        ballPosFromLeft === puckPosFromLeft + 11 ||
        ballPosFromLeft === puckPosFromLeft + 12) &&
      ballPosFromTop === puckPositionFromTop
    ) {
      setVerticalDirection("UP");
    }
  }, [ballPosFromLeft, ballPosFromTop, puckPosFromLeft, setVerticalDirection]);

  console.log({
    ballPosFromLeft,
    ballPosFromTop,
    puckPosFromLeft,
  });

  const handleKeyDown = (code: string) => {
    switch (code) {
      case "ArrowRight":
        setPuckPosFromLeft(puckPosFromLeft + 7);
        break;
      case "ArrowLeft":
        setPuckPosFromLeft(puckPosFromLeft - 7);
        break;
      default:
        break;
    }
  };

  return (
    <div tabIndex={0} onKeyDown={({ code }) => handleKeyDown(code)}>
      <Title>Pinball</Title>
      <GameArea>
        <>
          <Ball />
          <Puck
            positionFromLeft={puckPosFromLeft}
            positionFromTop={puckPositionFromTop}
          />
        </>
      </GameArea>
    </div>
  );
};

export default Home;
