import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import Carousel from "./components/Carousel";
import RecommendedPlace from "./components/RecommendedPlace";

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CarouselBox = styled.div`
  width: 100%;
  height: 200px;
  padding: 3dvh 0;
`;

const CAROUSEL_IMAGES = [
  "https://placehold.co/500x200",
  "https://placehold.co/500x200",
  "https://placehold.co/500x200",
  "https://placehold.co/500x200",
];

const HomePage = () => {
  return (
    <Container>
      <HomeHeader />
      <CarouselBox>
        <Carousel images={CAROUSEL_IMAGES} />
      </CarouselBox>
      <RecommendedPlace />
    </Container>
  );
};

export default HomePage;
