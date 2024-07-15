import styled from "styled-components";
import Text from "../../../components/Text";
import Card from "../../../components/Card";

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
  width: 95%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RecommendedPlace = ({ recommendedList, locationState }) => {
  return (
    <Container>
      <Header>
        <Title>
          <Text $fontSize="20px" $fontWeight="800" $textColor="#0047FC">
            여기
          </Text>{" "}
          <Text $fontSize="18px">어때요?</Text>
        </Title>
      </Header>
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
