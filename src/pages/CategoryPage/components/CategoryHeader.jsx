import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Text from "../../../components/Text";

const Container = styled.div`
  width: 100%;
  height: 52px;
  background-color: white;
  border-radius: 0 0 20px 20px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 0 5px 15px -4px rgba(0, 0, 0, 0.4),
    0 -5px 15px -4px rgba(0, 0, 0, 0.4);
  position: relative; /* Needed for positioning the moving border */
`;

const Box = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  border-right: 1px solid #ccc;
  position: relative;

  &:last-child {
    border-right: none;
  }
`;

const MovingBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.left}px; /* Move the border based on the left prop */
  width: ${(props) => props.width}px; /* Set the width of the border */
  height: 5px;
  border-radius: 5px;
  background-color: #4887e4;
  transition: left 0.3s ease, width 0.3s ease;
`;

const CategoryHeader = ({ category }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(category);
  const [borderPosition, setBorderPosition] = useState({ left: 0, width: 0 });

  const handleCategoryClick = (category, index) => {
    const box = document.getElementById(`box-${index}`);
    const { offsetLeft, offsetWidth } = box;
    setBorderPosition({ left: offsetLeft, width: offsetWidth });

    setActiveCategory(category);
    navigate(`/category/${category}`, { state: { category } });
  };

  return (
    <Container>
      <Box
        id="box-0"
        active={activeCategory === "밥집"}
        onClick={() => handleCategoryClick("밥집", 0)}
      >
        <Text $fontSize="16px" $fontWeight="500">
          밥집
        </Text>
      </Box>
      <Box
        id="box-1"
        active={activeCategory === "술집"}
        onClick={() => handleCategoryClick("술집", 1)}
      >
        <Text $fontSize="16px" $fontWeight="500">
          술집
        </Text>
      </Box>
      <Box
        id="box-2"
        active={activeCategory === "카페"}
        onClick={() => handleCategoryClick("카페", 2)}
      >
        <Text $fontSize="16px" $fontWeight="500">
          카페
        </Text>
      </Box>
      <MovingBorder left={borderPosition.left} width={borderPosition.width} />
    </Container>
  );
};

export default CategoryHeader;
