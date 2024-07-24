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
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const MainInfoBox = styled.div`
  padding: 10px 0;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
`;

const PlaceInfo = ({ infoList, distance }) => {
  const {
    membermobile,
    membername,
    memberposition,
    memberspec,
    memberstate,
    memberstorepoint,
    memberclosedtimehour,
    memberclosedtimemin,
    memberopentimehour,
    memberopentimemin,
  } = infoList || {};

  const zeroPadding = (num) => {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  };

  return (
    <Container>
      <TopBox>
        <TopTextBox>
          <Text $fontSize="36px" $fontWeight="700">
            {membername}
          </Text>
          <Text $fontSize="12px" $textColor="#787878">
            {memberstorepoint}
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.591 1.52891C25.3629 1.01253 27.023 2.58425 26.4777 4.26284L20.0579 24.0242C19.4452 25.91 16.7166 26.1249 15.7846 24.3594L16.5224 24.0101L15.7846 24.3594L11.3633 15.9841C11.3313 15.9235 11.2796 15.8746 11.2158 15.8444C11.2158 15.8444 11.2158 15.8444 11.2158 15.8444L2.37308 11.6569L2.78168 10.8828L2.37307 11.6568C0.509489 10.7743 0.735153 8.19002 2.72668 7.60963L23.591 1.52891L23.591 1.52891ZM24.1732 3.32099C24.1732 3.32099 24.1732 3.321 24.1732 3.321L3.30889 9.40171L3.03426 8.55639L3.30887 9.40172C3.02444 9.48461 2.9921 9.85369 3.25838 9.97979L2.81573 10.8183L3.25838 9.97979L12.1011 14.1673L12.1011 14.1673C12.5482 14.379 12.9105 14.7223 13.1339 15.1456L12.3167 15.5326L13.1339 15.1456L17.5552 23.5209C17.6882 23.7727 18.0781 23.7427 18.1658 23.4728L24.5855 3.71143C24.6634 3.47183 24.4265 3.24717 24.1732 3.32099Z"
              fill="#58AFFF"
            />
            <path
              d="M3.25838 9.97979C2.9921 9.85369 3.02444 9.48461 3.30887 9.40172L3.03426 8.55639L3.30889 9.40171L24.1732 3.321C24.1732 3.321 24.1732 3.32099 24.1732 3.32099C24.4265 3.24717 24.6634 3.47183 24.5855 3.71143L18.1658 23.4728C18.0781 23.7427 17.6882 23.7727 17.5552 23.5209L13.1339 15.1456L12.3167 15.5326L13.1339 15.1456C12.9105 14.7223 12.5482 14.379 12.1011 14.1673L12.1011 14.1673L3.25838 9.97979ZM3.25838 9.97979L2.81573 10.8183L3.25838 9.97979ZM26.4777 4.26284C27.023 2.58425 25.3629 1.01253 23.591 1.52891L23.591 1.52891L2.72668 7.60963C0.735152 8.19002 0.509489 10.7743 2.37307 11.6568L2.78168 10.8828L2.37308 11.6569L11.2158 15.8444C11.2158 15.8444 11.2158 15.8444 11.2158 15.8444C11.2796 15.8746 11.3313 15.9235 11.3633 15.9841L15.7846 24.3594L16.5224 24.0101L15.7846 24.3594C16.7166 26.1249 19.4452 25.91 20.0579 24.0242L26.4777 4.26284Z"
              stroke="#58AFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Text $fontSize="12px" $textColor="#58AFFF">
            {distance}
          </Text>
        </DistanceBox>
      </TopBox>
      <MainInfoBox>
        <Box>
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.20875 6.00923C6.40459 6.00923 5.75042 6.65655 5.75042 7.45313C5.75042 8.24889 6.40459 8.89538 7.20875 8.89538C8.01292 8.89538 8.66709 8.24889 8.66709 7.45313C8.66709 6.65655 8.01292 6.00923 7.20875 6.00923M7.20875 10.1323C5.71542 10.1323 4.50042 8.93084 4.50042 7.45313C4.50042 5.9746 5.71542 4.77231 7.20875 4.77231C8.70209 4.77231 9.91709 5.9746 9.91709 7.45313C9.91709 8.93084 8.70209 10.1323 7.20875 10.1323"
              fill="#58AFFF"
            />
            <mask
              id="mask0_97_120"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="15"
              height="17"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.333336 0.649231H14.0829V16.7292H0.333336V0.649231Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_97_120)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.20792 1.88615C4.10625 1.88615 1.58292 4.407 1.58292 7.50426C1.58292 11.4451 6.26958 15.2845 7.20792 15.489C8.14625 15.2837 12.8329 11.4443 12.8329 7.50426C12.8329 4.407 10.3096 1.88615 7.20792 1.88615V1.88615ZM7.20792 16.7292C5.71292 16.7292 0.332916 12.151 0.332916 7.50426C0.332916 3.72422 3.41708 0.649231 7.20792 0.649231C10.9987 0.649231 14.0829 3.72422 14.0829 7.50426C14.0829 12.151 8.70292 16.7292 7.20792 16.7292V16.7292Z"
                fill="#58AFFF"
              />
            </g>
          </svg>
          <Text $fontSize="12px">{memberposition}</Text>
        </Box>
        <Box>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 1.3883C4.48475 1.3883 1.625 4.21813 1.625 7.69661C1.625 11.1751 4.48475 14.0049 8 14.0049C11.5152 14.0049 14.375 11.1751 14.375 7.69661C14.375 4.21813 11.5152 1.3883 8 1.3883M8 15.1181C3.8645 15.1181 0.5 11.7888 0.5 7.69661C0.5 3.60437 3.8645 0.27507 8 0.27507C12.1355 0.27507 15.5 3.60437 15.5 7.69661C15.5 11.7888 12.1355 15.1181 8 15.1181"
              fill="#58AFFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5734 10.4369C10.4751 10.4369 10.3761 10.4117 10.2854 10.359L7.4579 8.68991C7.2884 8.58897 7.1834 8.40714 7.1834 8.21122V4.61326C7.1834 4.306 7.4354 4.05664 7.7459 4.05664C8.05715 4.05664 8.3084 4.306 8.3084 4.61326V7.89506L10.8621 9.40163C11.1284 9.55971 11.2161 9.9011 11.0571 10.1653C10.9514 10.3397 10.7646 10.4369 10.5734 10.4369"
              fill="#58AFFF"
            />
          </svg>
          {memberstate ? (
            <Text $fontSize="12px">영업 중 </Text>
          ) : (
            <Text $fontSize="12px" $textColor="red">
              영업 종료{" "}
            </Text>
          )}
          <Text $fontSize="12px">
            {zeroPadding(memberopentimehour) +
              ":" +
              zeroPadding(memberopentimemin) +
              " ~ " +
              zeroPadding(memberclosedtimehour) +
              ":" +
              zeroPadding(memberclosedtimemin)}
          </Text>
        </Box>
        <Box>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.46654 1.63627L1.52095 1.58C2.96652 0.149429 3.90788 -0.229758 4.9123 0.341782C5.20122 0.506188 5.47209 0.736318 5.84041 1.10649L6.97018 2.26575C7.5942 2.93955 7.73606 3.58585 7.53287 4.34275L7.50488 4.44296L7.47381 4.54259L7.32278 4.98107C6.99952 5.96441 7.13448 6.51921 8.2846 7.65701C9.48062 8.84022 10.0389 8.93702 11.1093 8.56689L11.3001 8.50127L11.5308 8.42715L11.6317 8.39942C12.4447 8.18477 13.1315 8.35606 13.8599 9.07632L14.7702 9.94641L15.0382 10.2072C15.3352 10.507 15.5316 10.7445 15.6766 10.9956C16.2506 11.9892 15.867 12.9202 14.3797 14.3864L14.2383 14.5282C14.0162 14.74 13.8087 14.8917 13.504 15.0349C12.9924 15.2753 12.388 15.3659 11.6856 15.2692C9.95505 15.0311 7.76012 13.6799 4.97891 10.9285C4.75251 10.7045 4.53568 10.4849 4.32819 10.2695L3.92561 9.84431C0.153218 5.78861 -0.179584 3.29723 1.36638 1.73472L1.46654 1.63627ZM4.92981 1.77956C4.68546 1.54119 4.50797 1.39587 4.35149 1.30683C4.00534 1.10986 3.63162 1.19312 2.93997 1.78219L2.72265 1.97431C2.68474 2.00894 2.64596 2.04488 2.60629 2.08218L2.35708 2.32236L2.33463 2.35012L2.16568 2.51808C1.75742 2.93073 1.56403 3.43435 1.73068 4.30046C2.00413 5.7217 3.25581 7.6497 5.7743 10.1412C8.39846 12.7373 10.3979 13.9681 11.8406 14.1666C12.6817 14.2824 13.1107 14.0808 13.5482 13.6373L13.8818 13.3041C14.0383 13.1421 14.1719 12.9953 14.2848 12.8611L14.4388 12.6692C14.8323 12.1505 14.8682 11.8394 14.6999 11.548C14.6359 11.4372 14.5428 11.3157 14.4072 11.1671L14.2232 10.9749L14.1144 10.8671L12.966 9.76978C12.5822 9.41958 12.3199 9.3699 11.9217 9.47502L11.8068 9.50774L11.3311 9.66754C9.95097 10.1086 8.95535 9.89472 7.4892 8.44428C5.97072 6.94207 5.79263 5.93892 6.30142 4.49454L6.33406 4.40172L6.42431 4.13264L6.46867 3.96112C6.54735 3.58784 6.45753 3.32758 6.05202 2.92625L5.99636 2.87073L4.92981 1.77956Z"
              fill="#58AFFF"
            />
          </svg>
          <Text $fontSize="12px">{membermobile}</Text>
        </Box>
        <Box>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 17.4766H6.75C2.6775 17.4766 0.9375 15.7366 0.9375 11.6641V7.16414C0.9375 3.09164 2.6775 1.35164 6.75 1.35164H10.5C10.8075 1.35164 11.0625 1.60664 11.0625 1.91414C11.0625 2.22164 10.8075 2.47664 10.5 2.47664H6.75C3.2925 2.47664 2.0625 3.70664 2.0625 7.16414V11.6641C2.0625 15.1216 3.2925 16.3516 6.75 16.3516H11.25C14.7075 16.3516 15.9375 15.1216 15.9375 11.6641V7.91414C15.9375 7.60664 16.1925 7.35164 16.5 7.35164C16.8075 7.35164 17.0625 7.60664 17.0625 7.91414V11.6641C17.0625 15.7366 15.3225 17.4766 11.25 17.4766Z"
              fill="#58AFFF"
            />
            <path
              d="M16.5 8.47665H13.5C10.935 8.47665 9.9375 7.47915 9.9375 4.91415V1.91415C9.9375 1.68915 10.0725 1.47915 10.2825 1.39665C10.4925 1.30665 10.7325 1.35915 10.8975 1.51665L16.8975 7.51665C17.055 7.67415 17.1075 7.92165 17.0175 8.13165C16.9275 8.34165 16.725 8.47665 16.5 8.47665ZM11.0625 3.27165V4.91415C11.0625 6.84915 11.565 7.35165 13.5 7.35165H15.1425L11.0625 3.27165Z"
              fill="#58AFFF"
            />
            <path
              d="M9.75 10.7266H5.25C4.9425 10.7266 4.6875 10.4716 4.6875 10.1641C4.6875 9.85664 4.9425 9.60164 5.25 9.60164H9.75C10.0575 9.60164 10.3125 9.85664 10.3125 10.1641C10.3125 10.4716 10.0575 10.7266 9.75 10.7266Z"
              fill="#58AFFF"
            />
            <path
              d="M8.25 13.7266H5.25C4.9425 13.7266 4.6875 13.4716 4.6875 13.1641C4.6875 12.8566 4.9425 12.6016 5.25 12.6016H8.25C8.5575 12.6016 8.8125 12.8566 8.8125 13.1641C8.8125 13.4716 8.5575 13.7266 8.25 13.7266Z"
              fill="#58AFFF"
            />
          </svg>
          <Text $fontSize="12px">가게 소개</Text>
        </Box>
        <Text $fontSize="12px">{memberspec}</Text>
      </MainInfoBox>
    </Container>
  );
};

export default PlaceInfo;
