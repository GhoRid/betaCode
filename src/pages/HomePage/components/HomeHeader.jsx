import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  /* background-color: #8fc9ff;
  border-radius: 0 0 20px 20px; */
  /* box-shadow: 0 5px 15px -4px rgba(0, 0, 0, 0.4),
    0 -5px 15px -4px rgba(0, 0, 0, 0.4); */
`;

const SearchingBar = styled.button`
  background-color: rgba(255, 255, 255, 0.3); /* 반투명 흰색 */
  width: 85%;
  height: 36px;
  border-radius: 15px;
  border: 1px solid #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <SearchingBar
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
            fill="white"
          />
        </svg>
      </SearchingBar>
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7265 24.712C12.6156 25.4001 13.7898 25.8184 15.0769 25.8184C16.3641 25.8184 17.5382 25.4001 18.4273 24.712M5.66343 21.1713C5.13371 21.1713 4.83785 20.3652 5.15828 19.9173C5.90181 18.878 6.61946 17.3537 6.61946 15.5181L6.65013 12.8583C6.65013 7.91667 10.4229 3.91064 15.0769 3.91064C19.7995 3.91064 23.6278 7.97568 23.6278 12.9901L23.5972 15.5181C23.5972 17.3663 24.2901 18.8989 25.0034 19.9386C25.3114 20.3876 25.0148 21.1713 24.4916 21.1713H5.66343Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Container>
  );
};

export default HomeHeader;
