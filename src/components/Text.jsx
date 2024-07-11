import styled from "styled-components";

const TextBox = styled.p`
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => props.$textColor};
`;

const Text = ({ children, $fontSize, $fontWeight, $textColor }) => {
  return (
    <TextBox
      $fontSize={$fontSize}
      $fontWeight={$fontWeight}
      $textColor={$textColor}
    >
      {children}
    </TextBox>
  );
};

export default Text;
