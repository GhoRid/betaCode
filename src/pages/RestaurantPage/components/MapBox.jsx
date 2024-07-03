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
  padding: 28px 0;
`;

const Box = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MapStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "10px",
};

const MapBox = () => {
  return (
    <Container>
      <Box>
        <Text $fontSize="28px" $fontWeight="600">
          지도
        </Text>
        <Map
          center={{ lat: 37.5665, lng: 126.978 }}
          style={MapStyle}
          level={3}
        ></Map>
      </Box>
    </Container>
  );
};

export default MapBox;
