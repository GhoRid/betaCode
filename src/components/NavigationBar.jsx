import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  max-width: 500px;
  width: 100vw;
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
      <Box>
        <NavLink to="/map">지도</NavLink>
      </Box>
      <Box>
        <NavLink to="/">홈</NavLink>
      </Box>

      <Box>마이</Box>
    </Container>
  );
};

export default NavigationBar;
