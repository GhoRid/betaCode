import styled from "styled-components";
import Text from "../../../components/Text";
import { ReactComponent as Searching } from "../../../assets/icons/Searching.svg";

const Container = styled.div`
  width: 100%;
  height: 96px;
  background-color: #8fc9ff;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px -4px rgba(0, 0, 0, 0.4),
    0 -5px 15px -4px rgba(0, 0, 0, 0.4);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92%;
  height: 20px;
`;

const Box = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const SearchingBar = styled.button`
  margin-top: 16px;
  background-color: white;
  width: 92%;
  height: 36px;
  border-radius: 36px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

const HomeHeader = () => {
  return (
    <Container>
      <TopBar>
        <Box>
          <Text $fontSize="16px">주소 등록</Text>
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.49989 7.82251C5.29199 7.82295 5.08607 7.77375 4.89397 7.67774C4.70186 7.58174 4.52735 7.44082 4.38048 7.26308L0.190186 2.20047L1.3096 0.848267L5.49989 5.90992L9.69019 0.848267L10.8096 2.20047L6.61931 7.26212C6.4725 7.44003 6.29802 7.58113 6.10591 7.6773C5.9138 7.77347 5.70785 7.82282 5.49989 7.82251Z"
              fill="#374957"
            />
          </svg>
        </Box>
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7265 24.712C12.6156 25.4001 13.7898 25.8184 15.0769 25.8184C16.3641 25.8184 17.5382 25.4001 18.4273 24.712M5.66343 21.1713C5.13371 21.1713 4.83785 20.3652 5.15828 19.9173C5.90181 18.878 6.61946 17.3537 6.61946 15.5181L6.65013 12.8583C6.65013 7.91667 10.4229 3.91064 15.0769 3.91064C19.7995 3.91064 23.6278 7.97568 23.6278 12.9901L23.5972 15.5181C23.5972 17.3663 24.2901 18.8989 25.0034 19.9386C25.3114 20.3876 25.0148 21.1713 24.4916 21.1713H5.66343Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </TopBar>
      <SearchingBar>
        <Searching />
      </SearchingBar>
    </Container>
  );
};

export default HomeHeader;
