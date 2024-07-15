import styled from "styled-components";
import CarouselContainer from "./CarouselConatiner";

const Image = styled.img`
  width: 100%;
  height: 170px;
  border-radius: 30px;
`;

const Carousel = ({ images }) => {
  const length = images.length;

  return (
    <CarouselContainer length={length}>
      {({ index }) => {
        const modulo = index % length;
        const imageIndex = modulo < 0 ? length + modulo : modulo;
        return (
          <Image draggable={false} alt="Mountain" src={images[imageIndex]} />
        );
      }}
    </CarouselContainer>
  );
};

export default Carousel;
