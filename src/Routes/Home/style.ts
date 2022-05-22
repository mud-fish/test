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

export const Banner = styled.div<{ bgPhoto: string }>`
  ${mixin.flexbox({ dir: "column", ai: "" })}
  height: 100vh;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgPhoto});
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

export const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 90%;
  color: red;
  font-size: 64px;

  &:first-child {
    transform-origin: left;
  }
  &:last-child {
    transform-origin: right;
  }
`;
