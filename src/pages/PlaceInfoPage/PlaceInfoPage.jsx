import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MenuList from "./components/MenuList";
import Header from "./components/Header";
import MapBox from "./components/MapBox";
import backgroundImage from "./../../assets/backgroundImage.png";
import Text from "../../components/Text";
import PlaceInfo from "./components/RestaurantInfo";

const Container = styled.div`
  width: 100%;
  background-color: #e5f3ff;
  position: relative;
`;

const MockImage = styled.img`
  width: 100%;
  height: auto;
`;

const ButtonBox = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  max-width: 400px;
  width: 90%;
  height: 80px;
  border-radius: 25px;
  background-color: #c4e3ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const PlaceInfoPage = () => {
  const { restaurant } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <MockImage src={backgroundImage} />
      <PlaceInfo />
      <ButtonBox>
        <Button>
          <Text $fontSize="18px">남은 테이블</Text>
          <Text $fontSize="20px" $fontWeight="500" $textColor="#234993">
            6/25
          </Text>
        </Button>
      </ButtonBox>
      <MapBox />
      <MenuList />
    </Container>
  );
};

export default PlaceInfoPage;
