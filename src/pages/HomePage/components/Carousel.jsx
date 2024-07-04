import CarouselContainer from "./CarouselConatiner";

const Carousel = ({ images }) => {
  return (
    <CarouselContainer>
      {({ index }) => {
        const modulo = index % images.length;
        const imageIndex = modulo < 0 ? images.length + modulo : modulo;
        return (
          <img
            draggable={false}
            alt="Mountain"
            style={{ width: "100%" }}
            src={images[imageIndex]}
          />
        );
      }}
    </CarouselContainer>
  );
};

export default Carousel;
