import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: skyblue;
  border-radius: 20px;
`;

const Card = () => {
  return (
    <Container>
      <Link to="/"></Link>
    </Container>
  );
};

export default Card;
