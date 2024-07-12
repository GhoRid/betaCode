import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";
import Text from "../../../components/Text";

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

const MapBox = () => {
  const coordinate = { lat: 35.17828963, lng: 126.909254315 };

  return (
    <Container>
      <Box>
        <Text $fontSize="16px" $fontWeight="600">
          지도
        </Text>
        <Map center={coordinate} style={MapStyle} level={4}></Map>
      </Box>
    </Container>
  );
};

export default MapBox;
