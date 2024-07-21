import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "../../../components/Text";
import { useNavigate } from "react-router-dom";

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

const Box = styled.button.attrs((props) => ({
  // 이 부분에서 active를 HTML 속성으로 전달하지 않음
  // active는 단지 styled-components의 조건부 스타일링에만 사용됨
  "data-active": props.active ? "true" : "false",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  border-right: 1px solid #ccc; /* Add border to the right of each box */
  position: relative; /* Ensure relative positioning for pseudo-element */

  /* Apply border-bottom based on category */
  &[data-active="true"] {
    border-bottom: 2px solid blue; /* Replace with your desired active border-bottom style */
  }

  /* Smooth transition for border-bottom */
  transition: border-bottom 0.3s ease;

  &:last-child {
    border-right: none; /* Remove border from the last box */
  }

  /* Pseudo-element for animating border-bottom */
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

  /* Expand the pseudo-element when active */
  &[data-active="true"]::after {
    transform: scaleX(1); /* Expand to full width */
  }
`;

const CategoryHeader = ({ category }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(category);

  // useEffect(() => {

  // }, []);

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
