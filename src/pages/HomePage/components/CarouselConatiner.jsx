import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import CarouselCard from "./CarouselCard";
import styled from "styled-components";
import Text from "./../../../components/Text";

const range = [-1, 0, 1];

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const transition = {
  type: "spring",
  bounce: 0,
};

const IndexIndicator = styled.div`
  position: absolute;
  right: 10%;
  bottom: 0;
  z-index: 999900;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 20px;
  border-radius: 20px 0 30px 0;
`;

const CarouselContainer = ({ children, length }) => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const convertNumber = (n) => {
    const remainder = n % length;
    return remainder === 0 ? length : remainder;
  };

  //현재 index에 따라 x값을 계산. handleEndDrag에서 setIndex로 index가 변경되지 않으면 기존의 calculateNewX()도 변하지 않기에 원래 위치로 로 이동.
  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const handleEndDrag = (e, dragProps) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, calculateNewX(), transition); // x 를 calculateNewX()로 이동, transition 적용
      return;
    }

    //현재 index를 조절하는 수치. 4분의 1 이상 넘어가면 인덱스 변경.
    if (offset.x > clientWidth / 4) {
      setIndex((prevIndex) => prevIndex - 1);
    } else if (offset.x < -clientWidth / 4) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 5000); // 3초마다 이미지 변경
    return () => clearInterval(timer);
  }, []);

  return (
    <Container ref={containerRef}>
      {range.map((rangeValue) => {
        return (
          <CarouselCard
            key={rangeValue + index}
            x={x}
            onDragEnd={handleEndDrag}
            index={rangeValue + index}
            renderPage={children}
          />
        );
      })}
      <IndexIndicator>
        <Text $fontSize="20px" $textColor="white">
          {convertNumber(index + 1)} / {length}
        </Text>
      </IndexIndicator>
    </Container>
  );
};

export default CarouselContainer;
