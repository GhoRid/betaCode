import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);
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
