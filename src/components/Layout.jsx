import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Container = styled.div`
  max-width: 500px;
  width: 100dvw;
  height: 93vh;
  height: 93dvh;
  overflow-x: hidden;
  background-color: #f3f9ff;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  scrollbar-width: none; /* Firefox */
`;

const Layout = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <NavigationBar />
    </>
  );
};

export default Layout;
