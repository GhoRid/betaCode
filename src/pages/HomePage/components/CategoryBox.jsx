import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import restorantImage from "../../../assets/restorant.webp";
import beerImage from "../../../assets/beer.webp";
import cafeImage from "../../../assets/Orange-juice_3D.webp";
import tableImage from "../../../assets/bell.webp";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const CategoryCard = styled.button`
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 110px;
`;

const CategoryTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 5px 0;
  font-weight: 800;
  color: black;
`;

const CategoryDescription = styled.span`
  font-size: 16px;
  color: #666;
  text-align: left;
  white-space: pre-line;
`;

const CategoryIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const CategoryBox = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <CategoryCard
        onClick={() => {
          navigate("category/밥집");
        }}
      >
        <CategoryTitle>밥집</CategoryTitle>
        <CategoryDescription>기다림 없이 빠른 {"\n"}식사</CategoryDescription>
        <CategoryIcon src={restorantImage} alt="밥집" />
      </CategoryCard>
      <CategoryCard
        onClick={() => {
          navigate("category/술집");
        }}
      >
        <CategoryTitle>술집</CategoryTitle>
        <CategoryDescription>2차로 가볍게 술집</CategoryDescription>
        <CategoryIcon src={beerImage} alt="술집" />
      </CategoryCard>
      <CategoryCard
        onClick={() => {
          navigate("category/카페");
        }}
      >
        <CategoryTitle>카페</CategoryTitle>
        <CategoryDescription>
          더운 여름날은 역시 {"\n"}
          카페에서
        </CategoryDescription>
        <CategoryIcon src={cafeImage} alt="카페" />
      </CategoryCard>
      <CategoryCard
        onClick={() => {
          navigate();
        }}
      >
        <CategoryTitle>기타</CategoryTitle>
        <CategoryDescription>
          세상의 모든 빈자리 {"\n"}
          블루테이블
        </CategoryDescription>
        <CategoryIcon src={tableImage} alt="기타" />
      </CategoryCard>
    </Container>
  );
};

export default CategoryBox;
