import { styled } from "styled-components";

const Container = styled.div`
  max-width: 390px;
  width: 100vh;
  max-height: 100px;
  height: 10vh;
  height: 8dvh; /* Mobile */

  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3등분 */

  border-top: 1px solid #e0e0e0;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationBar = () => {
  return (
    <Container>
      <Box>지도</Box>
      <Box>홈</Box>
      <Box>마이</Box>
    </Container>
  );
};

export default NavigationBar;
