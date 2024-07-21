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
`;

// active 속성이 DOM에 전달되지 않도록 필터링
const Box = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  border-right: 1px solid #ccc;
  position: relative;

  ${(props) =>
    props.active &&
    `
    border-bottom: 2px solid blue;
  `}

  transition: border-bottom 0.3s ease;

  &:last-child {
    border-right: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: blue;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  ${(props) =>
    props.active &&
    `
    &::after {
      transform: scaleX(1);
    }
  `}
`;

const CategoryHeader = ({ category }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(category);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    navigate(`/category/${category}`, { state: { category } });
  };

  return (
    <Container>
      <Box
        active={activeCategory === "밥집"}
        onClick={() => handleCategoryClick("밥집")}
      >
        <Text $fontSize="16px" $fontWeight="500">
          밥집
        </Text>
      </Box>
      <Box
        active={activeCategory === "술집"}
        onClick={() => handleCategoryClick("술집")}
      >
        <Text $fontSize="16px" $fontWeight="500">
          술집
        </Text>
      </Box>
      <Box
        active={activeCategory === "카페"}
        onClick={() => handleCategoryClick("카페")}
      >
        <Text $fontSize="16px" $fontWeight="500">
          카페
        </Text>
      </Box>
    </Container>
  );
};

export default CategoryHeader;
