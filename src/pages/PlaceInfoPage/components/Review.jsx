import styled from "styled-components";
import Text from "../../../components/Text";

const Container = styled.div`
  margin-top: 8px;
  background-color: white;
  width: 100%;
  padding: 20px;
`;

const Header = styled.div``;

const ReviewList = styled.div`
  width: 100%;
  height: 200px;
  padding: 100px 0;
  text-align: center;
`;

const Review = ({ review }) => {
  return (
    <Container>
      <Header>
        <Text $fontSize="16px" $fontWeight="500">
          리뷰
        </Text>
      </Header>
      <ReviewList>
        <Text $textColor="#7D7D7D">베타 테스트 중입니다.</Text>
      </ReviewList>
    </Container>
  );
};

export default Review;
