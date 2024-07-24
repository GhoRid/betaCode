import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import locationIcon from "../../assets/location.webp";
import styled from "styled-components";
import { ReactComponent as Searching } from "../../assets/icons/Searching.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMapList } from "../../apis/table/table";
import CustomOverlay from "./components/CustomOverlay";

const { kakao } = window;

const Container = styled.div`
  position: relative;
`;

const SearchingBarBox = styled.div`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background-color: #8fc9ff;
  width: 98%;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchingBar = styled.button`
  width: 96%;
  height: 40px;
  border-radius: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const PanToButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 500;
  font-size: 20px;
  transition: bottom 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapPage = () => {
  const [map, setMap] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { isLoading, data } = useQuery({
    queryKey: ["maplist"],
    queryFn: fetchMapList,
    onError: (e) => {
      console.log(e);
    },
  });

  const [locationState, setLocationState] = useState({
    center: {
      lat: 35.17828963,
      lng: 126.909254315,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    let watchId;

    if (navigator.geolocation) {
      watchId = navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setLocationState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setLocationState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }

    return () => {
      if (watchId !== undefined) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const panTo = (point) => {
    const lat = point.lat ? point.lat : locationState.center.lat;
    const lng = point.lng ? point.lng : locationState.center.lng;
    const newLatLng = new kakao.maps.LatLng(lat, lng);
    map.panTo(newLatLng);
  };

  return (
    <Container>
      <SearchingBarBox>
        <SearchingBar
          onClick={() => {
            navigate("/search");
          }}
        >
          <Searching />
        </SearchingBar>
      </SearchingBarBox>
      <Map
        id="map"
        style={{
          width: "100%",
          height: "93dvh",
        }}
        level={3}
        minLevel={6}
        onCreate={setMap}
        center={locationState.center}
      >
        {!locationState.isLoading && (
          <MapMarker
            position={locationState.center}
            image={{ src: locationIcon, size: { width: 30, height: 30 } }}
          />
        )}
        {data?.data.map((data, index) => {
          return (
            <CustomOverlay
              key={index}
              data={data}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          );
        })}
      </Map>
      <PanToButton onClick={panTo} aria-label="지도에서 위치로 이동">
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="8.5" stroke="black" />
          <path
            d="M9.5 1V0.5H8.5V1H9.5ZM8.5 3C8.5 3.27614 8.72386 3.5 9 3.5C9.27614 3.5 9.5 3.27614 9.5 3H8.5ZM8.5 1V3H9.5V1H8.5Z"
            fill="black"
          />
          <path
            d="M1 8.5H0.5V9.5H1V8.5ZM3 9.5C3.27614 9.5 3.5 9.27614 3.5 9C3.5 8.72386 3.27614 8.5 3 8.5V9.5ZM1 9.5H3V8.5H1V9.5Z"
            fill="black"
          />
          <path
            d="M9.5 15C9.5 14.7239 9.27614 14.5 9 14.5C8.72386 14.5 8.5 14.7239 8.5 15H9.5ZM8.5 17V17.5H9.5V17H8.5ZM8.5 15V17H9.5V15H8.5Z"
            fill="black"
          />
          <path
            d="M15 8.5C14.7239 8.5 14.5 8.72386 14.5 9C14.5 9.27614 14.7239 9.5 15 9.5V8.5ZM17 9.5H17.5V8.5H17V9.5ZM15 9.5H17V8.5H15V9.5Z"
            fill="black"
          />
          <circle cx="9" cy="9" r="1" fill="black" />
        </svg>
      </PanToButton>
    </Container>
  );
};

export default MapPage;
