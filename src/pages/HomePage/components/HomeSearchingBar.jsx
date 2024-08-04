import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Text from "../../../components/Text";

const Container = styled.button`
  width: 350px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #e4e4e4;
  padding: 4px 16px 0;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: inset 0 4px 2px 0 rgba(0, 0, 0, 0.1);
`;

const HomeSearchingBar = () => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/search");
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2803 15.2197C15.9874 14.9268 15.5126 14.9268 15.2197 15.2197C14.9268 15.5126 14.9268 15.9874 15.2197 16.2803L16.2803 15.2197ZM22.7197 23.7803C23.0126 24.0732 23.4874 24.0732 23.7803 23.7803C24.0732 23.4874 24.0732 23.0126 23.7803 22.7197L22.7197 23.7803ZM9.5 17.5C5.08172 17.5 1.5 13.9183 1.5 9.5H0C0 14.7467 4.2533 19 9.5 19V17.5ZM17.5 9.5C17.5 13.9183 13.9183 17.5 9.5 17.5V19C14.7467 19 19 14.7467 19 9.5H17.5ZM9.5 1.5C13.9183 1.5 17.5 5.08172 17.5 9.5H19C19 4.2533 14.7467 0 9.5 0V1.5ZM9.5 0C4.2533 0 0 4.2533 0 9.5H1.5C1.5 5.08172 5.08172 1.5 9.5 1.5V0ZM15.2197 16.2803L22.7197 23.7803L23.7803 22.7197L16.2803 15.2197L15.2197 16.2803Z"
          fill="#717171"
        />
      </svg>
      <Text $textColor="#E4E4E4" $fontWeight="600">
        지금 드시고 싶은 거 있나요?
      </Text>
    </Container>
  );
};

export default HomeSearchingBar;
