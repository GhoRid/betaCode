import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const RecommendedBox = styled.div`
  max-width: 400px;
  width: 95%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RecommendedPlace = ({ recommendedList, locationState }) => {
  return (
    <Container>
      <RecommendedBox>
        {Array.isArray(recommendedList) &&
          recommendedList.map((element, index) => (
            <Card key={index} element={element} locationState={locationState} />
          ))}
      </RecommendedBox>
    </Container>
  );
};

export default RecommendedPlace;
