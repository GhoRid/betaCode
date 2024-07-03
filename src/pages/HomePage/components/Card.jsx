import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: skyblue;
  border-radius: 20px;
  cursor: pointer;
`;

const Card = () => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/restaurant");
      }}
    ></Container>
  );
};

export default Card;
