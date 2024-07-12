import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Text from "../../../components/Text";

const Container = styled.div`
  width: 100%;
  height: 170px;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 1);
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const ShadowOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  border-radius: inherit;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  pointer-events: none;
  z-index: 2;
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  padding: 8px 12px;
  border-radius: 0 20px 0 20px;
  z-index: 3;
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
      <Image src={img} alt="img" />
      <ShadowOverlay />
      <TextBox>
        <Text $fontSize="24px" $fontWeight="600" $textColor="white">
          {membername}
        </Text>
      </TextBox>
    </Container>
  );
};

export default Card;
