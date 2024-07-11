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
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2821 23.0308H8.61542C8.12 23.0308 7.70917 22.62 7.70917 22.1246C7.70917 21.6292 8.12 21.2183 8.61542 21.2183H18.2821C21.1096 21.2183 23.4175 18.9104 23.4175 16.0829C23.4175 13.2554 21.1096 10.9475 18.2821 10.9475H4.99042C4.495 10.9475 4.08417 10.5367 4.08417 10.0413C4.08417 9.54584 4.495 9.13501 4.99042 9.13501H18.2821C22.1125 9.13501 25.23 12.2525 25.23 16.0829C25.23 19.9133 22.1125 23.0308 18.2821 23.0308Z"
            fill="white"
          />
          <path
            d="M7.76958 13.9683C7.54 13.9683 7.31041 13.8838 7.12916 13.7025L4.03583 10.6092C3.68541 10.2588 3.68541 9.67876 4.03583 9.32834L7.12916 6.23501C7.47958 5.88459 8.05958 5.88459 8.41 6.23501C8.76041 6.58543 8.76041 7.16543 8.41 7.51584L5.95708 9.96876L8.41 12.4217C8.76041 12.7721 8.76041 13.3521 8.41 13.7025C8.24083 13.8838 7.99916 13.9683 7.76958 13.9683Z"
            fill="white"
          />
        </svg>
      </button>
    </Container>
  );
};

export default Header;
