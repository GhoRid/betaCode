import { motion } from "framer-motion";
import { useMemo } from "react";

const pageStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
};

const CarouselCard = ({ index, renderPage, x, onDragEnd }) => {
  const child = useMemo(() => renderPage({ index }), [index, renderPage]);

  return (
    <motion.div
      style={{
        ...pageStyle,
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
    </motion.div>
  );
};

export default CarouselCard;
