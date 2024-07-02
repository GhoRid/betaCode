import styled from "styled-components";
import Header from "./components/Header";
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
  padding: 3dvh;
`;

const CAROUSEL_IMAGES = [
  "https://placehold.co/320x200",
  "https://placehold.co/320x200",
  "https://placehold.co/320x200",
  "https://placehold.co/320x200",
];

const HomePage = () => {
  return (
    <Container>
      <Header />
      <CarouselBox>
        <Carousel images={CAROUSEL_IMAGES} />
      </CarouselBox>
      <RecommendedPlace />
    </Container>
  );
};

export default HomePage;
