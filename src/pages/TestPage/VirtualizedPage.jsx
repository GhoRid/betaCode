import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import Page from "./Page";

const range = [-1, 0, 1];

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflowX: "hidden",
};

const transition = {
  type: "spring",
  bounce: 0,
};

const VirtualizedPage = ({ children }) => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

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
      setIndex(index - 1);
    } else if (offset.x < -clientWidth / 4) {
      setIndex(index + 1);
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index]);

  return (
    <motion.div ref={containerRef} style={containerStyle}>
      {range.map((rangeValue) => {
        return (
          <Page
            key={rangeValue + index}
            x={x}
            onDragEnd={handleEndDrag}
            index={rangeValue + index}
            renderPage={children}
          />
        );
      })}
    </motion.div>
  );
};

export default VirtualizedPage;
