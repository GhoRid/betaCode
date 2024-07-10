import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import Carousel from "./components/Carousel";
import RecommendedPlace from "./components/RecommendedPlace";
import CategoryBox from "./components/CategoryBox";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const CarouselBox = styled.div`
  height: 200px;
  margin: 2dvh 3.5dvw;
  position: relative;
`;

const CAROUSEL_IMAGES = [
  "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=300",
  "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=300",
  "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=300",
  // "https://placehold.co/500x200",
  // "https://placehold.co/500x200",
  // "https://placehold.co/500x200",
  // "https://placehold.co/500x200",
];

const HomePage = () => {
  return (
    <Container>
      <HomeHeader />
      <CarouselBox>
        <Carousel images={CAROUSEL_IMAGES} />
      </CarouselBox>
      <CategoryBox />
      <RecommendedPlace />
    </Container>
  );
};

export default HomePage;
