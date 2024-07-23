import styled, { keyframes } from "styled-components";

// Define the spinner animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

// Define the overlay
const Overlay = styled.div`
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Spinner = styled.div`
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  border-radius: 0.5em;
  box-shadow: rgba(72, 135, 228, 0.75) 1.5em 0 0 0,
    rgba(72, 135, 228, 0.75) 1.1em 1.1em 0 0,
    rgba(72, 135, 228, 0.75) 0 1.5em 0 0,
    rgba(72, 135, 228, 0.75) -1.1em 1.1em 0 0,
    rgba(72, 135, 228, 0.75) -1.5em 0 0 0,
    rgba(72, 135, 228, 0.75) -1.1em -1.1em 0 0,
    rgba(72, 135, 228, 0.75) 0 -1.5em 0 0,
    rgba(72, 135, 228, 0.75) 1.1em -1.1em 0 0;
  animation: ${spin} 2500ms infinite linear;
`;

// Main Spinner component
const Loader = () => (
  <SpinnerContainer>
    <Overlay />
    <Spinner />
  </SpinnerContainer>
);

export default Loader;
