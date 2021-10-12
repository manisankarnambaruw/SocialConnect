import styled from "styled-components";
import { IStyles } from "../interfaces";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 14px 6px;
`;

export const DegreeOfSeparationWrapper = styled.div`
  padding: 15px;
  display: flex;
`;

export const PersonWrapper = styled.div<IStyles>`
  padding-right: 12px;
  min-width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.width || "180px"}; ;
`;

export const SeparationLine = styled.div<IStyles>`
  min-width: ${(props) => props.width || "100px"};
  max-width: ${(props) => props.width || "100px"};
  height: 3px;
  position: relative;
  background: darkgray;
  top: 24px;
  margin-right: 12px;
  & span {
    color: gray;
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ScrollingX = styled.div`
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    /* Hide scrollbar for Chrome, Safari and Opera */
    display: none;
  }
`;
