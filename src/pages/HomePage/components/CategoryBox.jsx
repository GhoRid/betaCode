import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import restorantImage from "../../../assets/restorant.webp";
import beerImage from "../../../assets/beer.webp";
import cafeImage from "../../../assets/Orange-juice_3D.webp";
import tableImage from "../../../assets/bell.webp";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const CategoryCard = styled.div`
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
`;

const CategoryDescription = styled.p`
  font-size: 14px;
  margin: 0;
  color: #666;
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
      <CategoryCard>
        <CategoryTitle>밥집</CategoryTitle>
        <CategoryDescription>기다림 없이 빠른 식사</CategoryDescription>
        <CategoryIcon src={restorantImage} alt="밥집" />
      </CategoryCard>
      <CategoryCard>
        <CategoryTitle>술집</CategoryTitle>
        <CategoryDescription>
          2차로 갈 술집이 급하게 <br />
          필요할 때
        </CategoryDescription>
        <CategoryIcon src={beerImage} alt="술집" />
      </CategoryCard>
      <CategoryCard>
        <CategoryTitle>카페</CategoryTitle>
        <CategoryDescription>
          더운 여름날은 역시 <br />
          카페에서
        </CategoryDescription>
        <CategoryIcon src={cafeImage} alt="카페" />
      </CategoryCard>
      <CategoryCard>
        <CategoryTitle>기타</CategoryTitle>
        <CategoryDescription>
          세상의 모든 빈자리
          <br /> 블루데이블
        </CategoryDescription>
        <CategoryIcon src={tableImage} alt="기타" />
      </CategoryCard>
    </Container>
  );
};

export default CategoryBox;
