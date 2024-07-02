import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 320px;
  overflow: hidden;
  margin: 0 auto;
`;

const Slide = styled.div`
  min-width: 100%;
  transition: transform 0.5s ease-in-out;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3초마다 이미지 변경
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <CarouselContainer>
      <Slide style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Image src={image} alt={`Slide ${index}`} key={index} />
        ))}
      </Slide>
    </CarouselContainer>
  );
};

export default Carousel;
