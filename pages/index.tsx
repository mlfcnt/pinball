import type { NextPage } from "next";
import { Ball } from "../components/Ball";
import { GameArea } from "../components/GameArea";
import styled from "styled-components";
import { Puck } from "../components/Puck";
import { handleKeyDown } from "../lib/onKeyDown";
import { usePositions } from "../lib/usePositions";
import { Bricks } from "../components/Bricks";

export type VerticalDirection = "UP" | "DOWN";
export type HorizontalDirection = "LEFT" | "RIGHT";

const Home: NextPage = () => {
  const {
    ballPosFromLeft,
    ballPosFromTop,
    puckPositionFromLeft,
    puckPositionFromTop,
    setPuckPositionFromLeft,
  } = usePositions();

  const Title = styled.h1`
    text-align: center;
  `;

  return (
    <div
      tabIndex={0}
      onKeyDown={({ code }) =>
        handleKeyDown(code, puckPositionFromLeft, setPuckPositionFromLeft)
      }
    >
      <Title>Pinball</Title>
      <GameArea>
        <Bricks />
        <Ball
          positionFromLeft={ballPosFromLeft}
          positionFromTop={ballPosFromTop}
        />
        <Puck
          positionFromLeft={puckPositionFromLeft}
          positionFromTop={puckPositionFromTop}
        />
      </GameArea>
    </div>
  );
};

export default Home;
