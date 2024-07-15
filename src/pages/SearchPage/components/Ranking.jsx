import { styled } from "styled-components";
import Text from "../../../components/Text";

const Container = styled.div`
  padding: 0 3.5dvw;
`;

const TopBox = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #58afff;
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 60px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #58afff;
`;

const Ranking = () => {
  return (
    <Container>
      <TopBox>
        <Text $fontSize="18px" $fontWeight="500">
          검색 순위
        </Text>
      </TopBox>
      <ContentBox>
        <Text $fontSize="12px" $textColor="#7d7d7d">
          베타 서비스 중입니다.
        </Text>
      </ContentBox>
    </Container>
  );
};

export default Ranking;
