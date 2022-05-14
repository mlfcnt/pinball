import type { NextPage } from "next";
import { Ball } from "../components/Ball";
import { GameArea } from "../components/GameArea";
import styled from "styled-components";

const Home: NextPage = () => {
  const Title = styled.h1`
    text-align: center;
  `;
  return (
    <div>
      <Title>Pinball</Title>
      <GameArea>
        <Ball />
      </GameArea>
    </div>
  );
};

export default Home;
