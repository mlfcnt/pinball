import React from "react";
import styled from "styled-components";

const BricksStyledComponents = styled.div`
  position: absolute;
  width: 500px;
  display: flex;
  flex-wrap: wrap; ;
`;

const Brick = () => {
  return <div>🧱</div>;
};

export const Bricks = () => {
  const amountOfBricks = 100;
  const displayBricks = () => {
    const bricks = [];
    for (let i = 0; i < amountOfBricks; i++) {
      bricks.push(<Brick />);
    }
    return bricks;
  };
  return <BricksStyledComponents>{displayBricks()}</BricksStyledComponents>;
};
