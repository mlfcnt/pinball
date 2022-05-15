import React from "react";
import styled from "styled-components";

type Props = {
  children?: JSX.Element[];
};

const GameAreaStyledComp = styled.div`
  border: 2px solid black;
  width: 500px;
  height: 500px;
  margin: auto;
  margin-top: 100px;
  /* background-color: blue; */
`;

export const GameArea = ({ children }: Props) => {
  return <GameAreaStyledComp>{children}</GameAreaStyledComp>;
};
