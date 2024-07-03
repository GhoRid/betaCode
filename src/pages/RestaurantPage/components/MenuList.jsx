import styled from "styled-components";
import Text from "../../../components/Text";

const Container = styled.div`
  margin-top: 8px;
  background-color: white;
  padding: 20px 6%;
`;

const TextBox = styled.div`
  display: flex;

  align-items: center;
  gap: 12px;
`;

const ImageBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
`;

const MenuList = () => {
  return (
    <Container>
      <TextBox>
        <Text $fontSize="24px">메뉴</Text>
        <Text $fontSize="24px" $textColor="#9E9E9E">
          33
        </Text>
      </TextBox>
      <ImageBox>
        <img src="https://placehold.co/120x120" alt="" />
        <img src="https://placehold.co/120x120" alt="" />
        <img src="https://placehold.co/120x120" alt="" />
        <img src="https://placehold.co/120x120" alt="" />
      </ImageBox>
    </Container>
  );
};

export default MenuList;
