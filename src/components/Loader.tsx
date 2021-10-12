import styled from "styled-components";

const StyledDiv = styled.span`
  position: absolute;
  top: 0;
  width: 100%;
  background: #fbf4e9;
  z-index: 2000;
  height: 4px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 65%;
    height: 3px;
    background: #1db9c3;
    animation: loader 0.7s linear infinite normal;
  }

  @keyframes loader {
    from {
      left: -45vw;
    }
    to {
      left: 100vw;
    }
  }
`;

export default function Loader() {
  return <StyledDiv />;
}
