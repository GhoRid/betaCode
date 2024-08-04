import styled from "styled-components";
import RecommendedPlace from "../../../components/RecommendedPlace";
import Text from "../../../components/Text";

const Container = styled.div`
  /* border-radius: 30px; */
  /* background-color: #f1f0f5;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2); */
  padding: 8px 0;
`;

const RecommandHeader = styled.div`
  padding-top: 8px;
`;

const Title = styled.div`
  margin-left: 5%;
  font-size: 16px;
`;

const RecommendedPlaceBox = ({ recommendedList, currentLocationState }) => {
  return (
    <Container>
      <RecommandHeader>
        <Title>
          <Text $fontSize="24px" $fontWeight="800" $textColor="#0071A8">
            여기
          </Text>{" "}
          <Text $fontSize="20px" $fontWeight="700">
            어때요?
          </Text>
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
