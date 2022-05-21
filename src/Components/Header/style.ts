import { mixin } from "./../../styles/util";
import styled from "styled-components";

export const Nav = styled.nav`
  ${mixin.flexbox({ jc: "space-between", ai: "center" })}
  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

export const Col = styled.div`
  ${mixin.flexbox({ ai: "center", jc: "" })}
`;

export const Logo = styled.svg`
  ${mixin.flexbox({ jc: "" })}
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

export const Items = styled.ul`
  ${mixin.flexbox({ ai: "cetner", jc: "" })}
`;

export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

export const Search = styled.span`
  color: white;
  svg {
    height: 25px;
  }
`;
