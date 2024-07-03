import styled from "styled-components";

const TextBox = styled.span`
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => props.$textColor};
`;

const Text = ({ children }) => {
  return <TextBox>{children}</TextBox>;
};

export default Text;
