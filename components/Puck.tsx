import React from "react";
import styled from "styled-components";
import { StyledPuckProps } from "../types";

const PuckStyledComp = styled.div<StyledPuckProps>`
  height: 10px;
  width: 100px;
  background-color: darkblue;
  position: relative;
  left: ${(props) => `${props.positionFromLeft}%`};
  top: ${(props) => `${props.positionFromTop}%`};
`;

type Props = {
  positionFromLeft: number;
  positionFromTop: number;
};

export const Puck = ({ positionFromLeft, positionFromTop }: Props) => {
  return (
    <PuckStyledComp
      positionFromLeft={positionFromLeft}
      positionFromTop={positionFromTop}
    />
  );
};
