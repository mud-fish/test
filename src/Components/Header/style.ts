import { motion } from "framer-motion";
import { mixin } from "./../../styles/util";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  ${mixin.flexbox({ jc: "space-between", ai: "center" })}
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

export const Col = styled.div`
  ${mixin.flexbox({ ai: "center", jc: "" })}
`;

export const Logo = styled(motion.svg)`
  ${mixin.flexbox({ jc: "" })}
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 8px;
    stroke: white;
  }
`;

export const Items = styled.ul`
  ${mixin.flexbox({ ai: "cetner", jc: "" })}
`;

export const Item = styled.li`
  ${mixin.flexbox({ dir: "column" })}
  position: relative;
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  background-color: ${(props) => props.theme.red};
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Search = styled.form`
  position: relative;
  ${mixin.flexbox({ jc: "" })};
  color: white;
  svg {
    position: absolute;
    right: 15px;
    cursor: pointer;
    height: 25px;
    z-index: 1;
  }
`;

export const Input = styled(motion.input)`
  position: relative;
  transform-origin: right;
  padding: 5px 10px 5px 40px;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;
