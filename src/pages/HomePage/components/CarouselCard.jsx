import { motion } from "framer-motion";
import { useMemo } from "react";
import styled from "styled-components";

const Card = styled(motion.div)`
  position: absolute;
  width: 90%;
  height: 250px;
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
