import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Text from "../../components/Text";
import RestaurantInfo from "./components/RestaurantInfo";
import MenuList from "./components/MenuList";
import Header from "./components/Header";
import MapBox from "./components/MapBox";
import backgroundImage from "./../../assets/backgroundImage.png";

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  position: relative;
`;

const MockImage = styled.img`
  width: 100%;
  height: auto;
  z-index: -1;
`;

const RestaurantPage = () => {
  const { restaurant } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <MockImage src={backgroundImage} />
      <RestaurantInfo />
      <MapBox />
      <MenuList />
    </Container>
  );
};

export default RestaurantPage;
