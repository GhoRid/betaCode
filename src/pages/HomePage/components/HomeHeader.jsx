import styled from "styled-components";
import logoImage from "./../../../assets/BTC_logo.png";
import Text from "./../../../components/Text";

const Container = styled.div`
  width: 340px;
  margin: 0 auto;
  height: auto;
  gap: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Image = styled.img`
  height: 40px;
`;

const Box = styled.div`
  height: 60px; /* 높이를 80px로 설정 */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 자식 요소들을 공간을 균등하게 분배 */
`;

const HalfHeightDiv = styled.div`
  height: 50%; /* Box의 절반 높이 */
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #aeaeae;
`;

const HomeHeader = () => {
  return (
    <Container>
      <LogoBox>
        <Image src={logoImage} alt="BTC logo" />
        <Box>
          <HalfHeightDiv></HalfHeightDiv>
          <Divider />
          <HalfHeightDiv>
            <Text $textColor="#2586B5" $fontWeight="600">
              No waiting, Entering now
            </Text>
          </HalfHeightDiv>
        </Box>
      </LogoBox>
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
    </Container>
  );
};

export default HomeHeader;
