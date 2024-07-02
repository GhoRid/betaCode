import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  max-width: 500px;
  width: 100dvw;
  height: 92vh;
  height: 92dvh; /* Mobile */
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
