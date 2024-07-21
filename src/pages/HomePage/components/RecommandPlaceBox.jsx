import styled from "styled-components";
import RecommendedPlace from "../../../components/RecommendedPlace";
import Text from "../../../components/Text";

const Container = styled.div`
  width: 95%;
  margin: 12px auto;
  border-radius: 30px;
  background-color: #f1f0f5;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  padding: 32px 0 12px 0;
`;

const RecommandHeader = styled.div``;

const Title = styled.div`
  margin-left: 5%;
  font-size: 16px;
`;

const RecommendedPlaceBox = ({ recommendedList, currentLocationState }) => {
  return (
    <Container>
      <RecommandHeader>
        <Title>
          <Text $fontSize="32px" $fontWeight="800" $textColor="#217BFF">
            여기
          </Text>{" "}
          <Text $fontSize="20px">어때요?</Text>
        </Title>
      </RecommandHeader>
      <RecommendedPlace
        recommendedList={recommendedList}
        locationState={currentLocationState}
      />
    </Container>
  );
};

export default RecommendedPlaceBox;
