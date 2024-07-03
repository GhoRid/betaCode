import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.2));
  padding: 4px 12px 0;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <svg
          width="16"
          height="28"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L9 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M9.00024 16.8789L1.00024 8.87891"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </Container>
  );
};

export default Header;
