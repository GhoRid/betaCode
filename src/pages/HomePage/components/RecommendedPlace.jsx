import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const Header = styled.div``;

const Title = styled.div`
  margin-left: 5%;
  font-size: 16px;
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
        <Title>주변 맛집</Title>
      </Header>
      <RecommendedBox>
        <Card />
        <Card />
        <Card />
        <Card />
      </RecommendedBox>
    </Container>
  );
};

export default RecommendedPlace;
