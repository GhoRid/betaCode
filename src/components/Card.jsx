import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Text from "./Text";
import { useEffect, useState } from "react";
import { translateDistance } from "../utils/tranlateDistance";

const { kakao } = window;

const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  padding: 12px;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 6px; */
  border-bottom: 1px solid #c4e3ff;
  padding: 4px 0;
`;

const PositionInfoBox = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RestTableBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Card = ({ element, locationState }) => {
  const [distance, setDistance] = useState(0);
  const [point, setPoint] = useState({});
  const navigate = useNavigate();
  const [regionName, setRegionName] = useState("");

  const {
    membername,
    img,
    lefttable,
    alltable,
    memberposition,
    memberstorepoint,
  } = element;

  const geocoder = new kakao.maps.services.Geocoder();

  useEffect(() => {
    geocoder.addressSearch(memberposition, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPoint({ lat: result[0].address.y, lng: result[0].address.x });
        setRegionName(result[0].address.region_3depth_name);
      }
    });
  }, [locationState, memberposition]);

  const line = new kakao.maps.Polyline({
    path: [
      new kakao.maps.LatLng(locationState.center.lat, locationState.center.lng),
      new kakao.maps.LatLng(point.lat, point.lng),
    ],
    strokeWeight: 3,
    strokeColor: "#db4040",
    strokeOpacity: 1,
    strokeStyle: "solid",
  });

  useEffect(() => {
    setDistance(translateDistance(line.getLength()));
  }, [line]);

  return (
    <Container
      onClick={() => {
        navigate(`/${membername}`);
      }}
    >
      <Image src={img} />
      <ContentBox>
        <NameBox>
          <Text $fontSize="20px" $fontWeight="800">
            {membername}
          </Text>
          <Text $fontSize="12px">{memberstorepoint}</Text>
          <PositionInfoBox>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10C5 7.5 7.5 6.25 10 6.25M10 6.25L8.75 8.125M10 6.25L8.125 5M3.75 13.75H11.25C12.6307 13.75 13.75 12.6307 13.75 11.25V3.75C13.75 2.36929 12.6307 1.25 11.25 1.25H3.75C2.36929 1.25 1.25 2.36929 1.25 3.75V11.25C1.25 12.6307 2.36929 13.75 3.75 13.75Z"
                stroke="#4887E4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text $fontSize="12px">{regionName}</Text>
            <Text $fontSize="12px">{distance}</Text>
          </PositionInfoBox>
        </NameBox>
        <RestTableBox>
          <Text $fontSize="12px">남은 테이블</Text>
          <Text $fontSize="20px" $textColor="#4887E4">
            {lefttable}/{alltable}
          </Text>
        </RestTableBox>
      </ContentBox>
    </Container>
  );
};

export default Card;
