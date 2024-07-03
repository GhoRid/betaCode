import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-height: 60px;
  height: 5dvh;

  background-color: #9b99ff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeHeader = () => {
  return (
    <Container>
      <h1>Header</h1>
      <p>This is the header</p>
    </Container>
  );
};

export default HomeHeader;
