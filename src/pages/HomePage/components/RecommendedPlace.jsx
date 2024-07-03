import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 2%;
`;

const Title = styled.div`
  margin-left: 5%;
  font-size: 24px;
`;

const RecommendedBox = styled.div`
  max-width: 400px;
  width: 90%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RecommendedPlace = ({ recommendedList }) => {
  return (
    <Container>
      <Header>
        <Title>2차 여기 어때요</Title>
      </Header>
      <RecommendedBox>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </RecommendedBox>
    </Container>
  );
};

export default RecommendedPlace;
