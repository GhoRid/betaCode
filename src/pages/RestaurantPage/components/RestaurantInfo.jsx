import styled from "styled-components";
import Text from "../../../components/Text";

const RestaurantInfoBox = styled.div`
  background-color: white;
`;

const InfoMain = styled.div`
  padding: 4% 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DetailInfoBox = styled.div`
  padding: 4% 6%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ContactNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RestaurantInfo = () => {
  return (
    <RestaurantInfoBox>
      <InfoMain>
        <Box>
          <Text $fontSize="40px">통발</Text>
          <Text $fontSize="14px">503m</Text>
        </Box>
        <svg
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.6634 0L0 21.3317L15.9988 26.6646L21.3317 42.6634L42.6634 0Z"
            fill="#366EFF"
          />
        </svg>
      </InfoMain>
      <DetailInfoBox>
        <Time>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0C3.15 0 0 3.15 0 7C0 10.85 3.15 14 7 14C10.85 14 14 10.85 14 7C14 3.15 10.85 0 7 0ZM7 1.75C9.905 1.75 12.25 4.095 12.25 7C12.25 9.905 9.905 12.25 7 12.25C4.095 12.25 1.75 9.905 1.75 7C1.75 4.095 4.095 1.75 7 1.75ZM6.125 3.5V7.385L6.405 7.6125L7.28 8.4875L7.875 9.1525L9.135 7.8925L8.47 7.2975L7.875 6.7025V3.535H6.125V3.5Z"
              fill="black"
            />
          </svg>
          <Text $fontSize="14px">영업 시간</Text>
        </Time>
        <ContactNumber>
          <svg
            width="14"
            height="23"
            viewBox="0 0 14 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.530938 0C0.223553 0 0 0.223553 0 0.530938V21.8523C0 22.1597 0.223553 22.3832 0.530938 22.3832H13.4691C13.7764 22.3832 14 22.1597 14 21.8523V0.530938C14 0.223553 13.7764 0 13.4691 0L0.530938 0ZM2.79441 2.79441H11.1776V16.7665H2.79441V2.79441ZM6.98603 18.1637C7.76846 18.1637 8.38323 18.7784 8.38323 19.5609C8.38323 20.3433 7.76846 20.9581 6.98603 20.9581C6.20359 20.9581 5.58882 20.3433 5.58882 19.5609C5.58882 18.7784 6.20359 18.1637 6.98603 18.1637Z"
              fill="black"
            />
          </svg>
          <Text $fontSize="14px">010-1234-5678</Text>
        </ContactNumber>
      </DetailInfoBox>
    </RestaurantInfoBox>
  );
};

export default RestaurantInfo;
