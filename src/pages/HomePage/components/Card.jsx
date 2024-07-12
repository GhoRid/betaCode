import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Text from "../../../components/Text";

const Container = styled.div`
  width: 100%;
  height: 170px;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
  padding: 8px 12px;
  border-radius: 0 20px 0 20px;
`;

const Card = ({ element }) => {
  const navigate = useNavigate();

  const { membername, img } = element;

  return (
    <Container
      onClick={() => {
        navigate(membername);
      }}
    >
      <Image src={img} alt="img"></Image>
      <TextBox>
        <Text $fontSize="24px" $fontWeight="600" $textColor="white">
          {membername}
        </Text>
      </TextBox>
    </Container>
  );
};

export default Card;
