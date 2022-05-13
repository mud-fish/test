import { useState } from "react";
import styled from "styled-components";

const darkModeBallColor = "#ff0953";
const lightModeBallColor = "#ffb310";
const darkModeBallOffset = "30px";
const lightModeBallOffset = "-5px";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [ballColor, setBallColor] = useState<string>(darkModeBallColor);
  const [ballOffset, setBallOffset] = useState<string>(darkModeBallOffset);
  const onClickBall = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      setBallColor(lightModeBallColor);
      setBallOffset(lightModeBallOffset);
      return;
    }
    setIsDarkMode(true);
    setBallColor(darkModeBallColor);
    setBallOffset(darkModeBallOffset);
  };

  return (
    <Layer onClick={onClickBall}>
      <Ball color={ballColor} offset={ballOffset}></Ball>
    </Layer>
  );
};

const Layer = styled.div`
  cursor: pointer;
  position: relative;
  top: 10px;
  width: 70px;
  height: 40px;
  border-radius: 999px;
  margin: 0 auto;
  border: 0;
  outline: 0;
  background-color: white;
`;

const Ball = styled.div<{ offset: string; color: string }>`
  position: absolute;
  top: 50%;
  width: 45px;
  height: 45px;
  background-color: ${({ color }) => color};
  border-radius: 999px;
  transform: translate3d(${({ offset }) => offset}, -50%, 0);
  transition: all 250ms;
`;

export default ThemeToggleButton;
