import { useParams } from "react-router-dom";
import styled from "styled-components";
import Text from "../../components/Text";
import RestaurantInfo from "./components/RestaurantInfo";

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
`;

const MockImage = styled.div`
  width: 100%;
  height: 260px;
  background-color: skyblue;
`;

const RestTableBox = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 20px 16%;
`;

const RestTable = styled.button`
  width: 100%;
  height: 80px;
  background-color: #84efb5;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const RestaurantPage = () => {
  const { restaurant } = useParams();

  return (
    <Container>
      <MockImage></MockImage>
      <RestaurantInfo />
      <RestTableBox>
        <RestTable>
          <Text $fontSize="20px">남은 테이블</Text>
          <Text $fontSize="20px" $textColor="white">
            8/28
          </Text>
        </RestTable>
      </RestTableBox>
    </Container>
  );
};

export default RestaurantPage;
