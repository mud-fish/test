import styled from "styled-components";
import { motion } from "framer-motion";

import { mixin } from "./../../styles/util";

export const Wrapper = styled.div`
  background-color: #000;
  height: 20vh;
`;

export const Loader = styled.div`
  ${mixin.flexbox({})}
  height: 20vh;
  text-align: center;
`;

export const Banner = styled.div<{ bgphoto: string }>`
  ${mixin.flexbox({ dir: "column", ai: "" })}
  height: 100vh;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgphoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  font-size: 36px;
  width: 50%;
`;

export const Slider = styled.div`
  ${mixin.flexbox({ jc: "flex-end" })}
  position: relative;
  top: -300px;
  height: 600px;
  overflow-x: hidden;
`;

export const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
  height: 300px;
  padding: 0 20px;
`;

export const Box = styled(motion.div)<{ bgphoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  height: 90%;
  font-size: 64px;
  cursor: pointer;

  &:first-child {
    transform-origin: left;
  }
  &:last-child {
    transform-origin: right;
  }
`;

export const Info = styled(motion.div)`
  position: absolute;
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  width: 100%;
  bottom: 0;

  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 40vh;
`;

export const BigTitle = styled.h3`
  color: ${({ theme }) => theme.white.lighter};
  padding: 0 30px;
  font-size: 50px;
  position: relative;
  top: -60px;
`;

export const BigMovie = styled(motion.div)`
  position: fixed;
  width: 40vw;
  height: 80vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.black.lighter};
`;

export const BigOverview = styled.p`
  color: ${({ theme }) => theme.white.lighter};
  padding: 20px;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0009;
  opacity: 0;
`;
