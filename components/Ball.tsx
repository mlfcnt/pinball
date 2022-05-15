import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { StyledBallProps } from "../types";

export const StyledBall = styled.span<StyledBallProps>`
  font-size: 140%;
  position: relative;
  top: ${(props) => `${props.positionFromTop}%`};
  left: ${(props) => `${props.positionFromLeft}%`};
`;

type Props = {
  positionFromLeft: number;
  positionFromTop: number;
};

export const Ball = ({ positionFromLeft, positionFromTop }: Props) => {
  const DVDImage = (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg"
      width={100}
      height={100}
      alt="dvd player icon"
    />
  );

  const ballIcon = "⚽";

  return (
    <>
      <StyledBall
        positionFromTop={positionFromTop}
        positionFromLeft={positionFromLeft}
      >
        {ballIcon}
      </StyledBall>
    </>
  );
};
