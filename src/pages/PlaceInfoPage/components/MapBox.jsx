import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import Text from "../../../components/Text";
import { useEffect, useState } from "react";
import locationIcon from "../../../assets/location.webp";
import Traffic from "../../../assets/icons/traffic.svg";

const { kakao } = window;

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 8px auto 0;
  padding: 28px 20px;
`;

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MapStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "10px",
};

const MapBox = ({ position }) => {
  const [center, setCenter] = useState({
    lat: 35.17828963,
    lng: 126.909254315,
  });

  const geocoder = new kakao.maps.services.Geocoder();

  useEffect(() => {
    geocoder.addressSearch(position, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setCenter({
          lat: result[0].y,
          lng: result[0].x,
        });
      }
    });
  }, [position]);

  return (
    <Container>
      <Box>
        <Text $fontSize="16px" $fontWeight="600">
          지도
        </Text>
        <Map center={center} style={MapStyle} level={4}>
          <MapMarker
            position={center}
            image={{ src: Traffic, size: { width: 45, height: 45 } }}
          />
        </Map>
      </Box>
    </Container>
  );
};

export default MapBox;
