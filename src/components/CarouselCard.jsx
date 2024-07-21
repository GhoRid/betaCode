import { motion } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";

const Card = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 6px;
  border-radius: 30px;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
`;

const CarouselCard = ({ index, renderPage, x, onDragEnd }) => {
  const child = useMemo(() => renderPage({ index }), [index, renderPage]);

  return (
    <Card
      style={{
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`,
      }}
      draggable
      drag="x"
      dragElastic={1}
      onDragEnd={onDragEnd}
    >
      {child}
    </Card>
  );
};

export default CarouselCard;
