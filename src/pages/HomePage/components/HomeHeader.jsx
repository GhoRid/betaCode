import styled from "styled-components";
import Text from "../../../components/Text";

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
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9998 19.7109L14.7815 14.2669C16.137 12.5374 16.8035 10.3306 16.643 8.10282C16.4826 5.87506 15.5075 3.79687 13.9195 2.29809C12.3314 0.799305 10.252 -0.00538755 8.11119 0.0504528C5.97039 0.106293 3.93207 1.01839 2.41783 2.59809C0.903588 4.17779 0.0292815 6.30423 -0.024245 8.53757C-0.0777715 10.7709 0.693577 12.9403 2.13025 14.5969C3.56693 16.2536 5.55901 17.2708 7.69445 17.4382C9.82989 17.6056 11.9453 16.9103 13.6032 15.4962L18.8215 20.9401L19.9998 19.7109ZM8.33315 15.724C7.01461 15.724 5.72568 15.3161 4.62935 14.5519C3.53302 13.7877 2.67854 12.7015 2.17395 11.4306C1.66937 10.1598 1.53735 8.76141 1.79458 7.4123C2.05182 6.06319 2.68676 4.82395 3.61911 3.8513C4.55146 2.87865 5.73934 2.21626 7.03255 1.94791C8.32576 1.67955 9.6662 1.81728 10.8844 2.34368C12.1025 2.87007 13.1437 3.76149 13.8763 4.90522C14.6088 6.04894 14.9998 7.39359 14.9998 8.76913C14.9978 10.613 14.2948 12.3808 13.045 13.6847C11.7952 14.9885 10.1007 15.7219 8.33315 15.724Z"
            fill="#374957"
          />
        </svg>
      </SearchingBar>
    </Container>
  );
};

export default HomeHeader;
