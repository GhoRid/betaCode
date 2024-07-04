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
  height: 300px;
  padding: 3dvh 0;
`;

const CAROUSEL_IMAGES = [
  "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=500",
  "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=500",
  "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=500",
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
