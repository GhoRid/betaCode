import React, { useState, useEffect } from "react";
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
  position: relative; /* MovingBorder 위치를 설정하기 위해 필요 */
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

  ${(props) =>
    props.active &&
    `
    background-color: #f0f0f0;
  `}
`;

const MovingBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.left}px; /* 경계선의 왼쪽 위치 */
  width: ${(props) => props.width}px; /* 경계선의 너비 */
  height: 5px;
  border-radius: 5px;
  background-color: #4887e4;
  transition: left 0.3s ease, width 0.3s ease; /* 부드러운 이동을 위한 transition */
`;

const CategoryHeader = ({ category }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(category);
  const [borderPosition, setBorderPosition] = useState({ left: 0, width: 0 });

  // 컴포넌트가 처음 렌더링될 때 초기 경계선 위치를 설정합니다.
  useEffect(() => {
    // 카테고리 박스의 초기 위치와 너비를 설정합니다.
    const setInitialBorderPosition = () => {
      const initialIndex = ["밥집", "술집", "카페"].indexOf(category);
      const box = document.getElementById(`box-${initialIndex}`);
      if (box) {
        const { offsetLeft, offsetWidth } = box;
        setBorderPosition({ left: offsetLeft, width: offsetWidth });
      }
    };

    setInitialBorderPosition();
  }, [category]);

  const handleCategoryClick = (category, index) => {
    const box = document.getElementById(`box-${index}`);
    if (box) {
      const { offsetLeft, offsetWidth } = box;
      setBorderPosition({ left: offsetLeft, width: offsetWidth });
    }

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
