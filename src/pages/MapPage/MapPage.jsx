import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import locationIcon from "../../assets/location.webp";

const { kakao } = window;

const MapPage = () => {
  const [map, setMap] = useState(null);

  const [locationState, setLocationState] = useState({
    center: {
      lat: 35.17828963,
      lng: 126.909254315,
    },
    errMsg: null,
    isLoading: true,
  });

  return (
    <div>
      <Map
        id="map"
        style={{
          width: "100%",
          height: "92dvh",
        }}
        level={3}
        minLevel={4}
        onCreate={setMap}
        center={locationState.center}
      >
        <MapMarker
          position={locationState.center}
          image={{ src: locationIcon, size: { width: 30, height: 30 } }}
        />
      </Map>
    </div>
  );
};

export default MapPage;
