import styled from "styled-components";

const Container = styled.div`
  max-width: 390px;
  background-color: skyblue;
`;

const HomePage = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      <p>This is the home page</p>
    </Container>
  );
};

export default HomePage;
