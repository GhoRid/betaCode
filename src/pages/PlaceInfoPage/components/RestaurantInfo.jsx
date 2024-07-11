import styled from "styled-components";
import Text from "../../../components/Text";

const Container = styled.div`
  background-color: white;
  width: 100%;
  border-top-right-radius: 25px;
  padding: 20px 6%;
`;

const TopBox = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
  justify-content: space-between;
`;

const TopTextBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
`;

const DistanceBox = styled.div`
  text-align: center;
`;

const MainInfoBox = styled.div`
  padding: 10px 0;
`;

const PlaceInfo = () => {
  return (
    <Container>
      <TopBox>
        <TopTextBox>
          <Text $fontSize="36px" $fontWeight="700">
            통발
          </Text>
          <Text $fontSize="12px" $textColor="#787878">
            전남대 상대점
          </Text>
        </TopTextBox>
        <DistanceBox>
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.591 1.52891C25.3629 1.01253 27.023 2.58425 26.4777 4.26284L20.0579 24.0242C19.4452 25.91 16.7166 26.1249 15.7846 24.3594L16.5224 24.0101L15.7846 24.3594L11.3633 15.9841C11.3313 15.9235 11.2796 15.8746 11.2158 15.8444C11.2158 15.8444 11.2158 15.8444 11.2158 15.8444L2.37308 11.6569L2.78168 10.8828L2.37307 11.6568C0.509489 10.7743 0.735153 8.19002 2.72668 7.60963L23.591 1.52891L23.591 1.52891ZM24.1732 3.32099C24.1732 3.32099 24.1732 3.321 24.1732 3.321L3.30889 9.40171L3.03426 8.55639L3.30887 9.40172C3.02444 9.48461 2.9921 9.85369 3.25838 9.97979L2.81573 10.8183L3.25838 9.97979L12.1011 14.1673L12.1011 14.1673C12.5482 14.379 12.9105 14.7223 13.1339 15.1456L12.3167 15.5326L13.1339 15.1456L17.5552 23.5209C17.6882 23.7727 18.0781 23.7427 18.1658 23.4728L24.5855 3.71143C24.6634 3.47183 24.4265 3.24717 24.1732 3.32099Z"
              fill="#58AFFF"
            />
            <path
              d="M3.25838 9.97979C2.9921 9.85369 3.02444 9.48461 3.30887 9.40172L3.03426 8.55639L3.30889 9.40171L24.1732 3.321C24.1732 3.321 24.1732 3.32099 24.1732 3.32099C24.4265 3.24717 24.6634 3.47183 24.5855 3.71143L18.1658 23.4728C18.0781 23.7427 17.6882 23.7727 17.5552 23.5209L13.1339 15.1456L12.3167 15.5326L13.1339 15.1456C12.9105 14.7223 12.5482 14.379 12.1011 14.1673L12.1011 14.1673L3.25838 9.97979ZM3.25838 9.97979L2.81573 10.8183L3.25838 9.97979ZM26.4777 4.26284C27.023 2.58425 25.3629 1.01253 23.591 1.52891L23.591 1.52891L2.72668 7.60963C0.735152 8.19002 0.509489 10.7743 2.37307 11.6568L2.78168 10.8828L2.37308 11.6569L11.2158 15.8444C11.2158 15.8444 11.2158 15.8444 11.2158 15.8444C11.2796 15.8746 11.3313 15.9235 11.3633 15.9841L15.7846 24.3594L16.5224 24.0101L15.7846 24.3594C16.7166 26.1249 19.4452 25.91 20.0579 24.0242L26.4777 4.26284Z"
              stroke="#58AFFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Text $fontSize="12px" $textColor="#58AFFF">
            1.2km
          </Text>
        </DistanceBox>
      </TopBox>
      <MainInfoBox>dss</MainInfoBox>
    </Container>
  );
};

export default PlaceInfo;
