import { useEffect, useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { ReactComponent as Traffic } from "../../../assets/icons/traffic.svg";
import Text from "../../../components/Text";
import { useNavigate } from "react-router-dom";

const { kakao } = window;

const OpenBox = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomOverlay = ({ data, isOpen, onToggle }) => {
  const [center, setCenter] = useState({
    lat: 35.17828963,
    lng: 126.909254315,
  });

  const navigate = useNavigate();

  const geocoder = new kakao.maps.services.Geocoder();

  useEffect(() => {
    geocoder.addressSearch(data.memberposition, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        // console.log(result);
        setCenter({
          lat: result[0].y,
          lng: result[0].x,
        });
      }
    });
  }, [data]);

  return (
    <>
      {isOpen ? (
        <CustomOverlayMap position={center} yAnchor={0.8}>
          <OpenBox
            onClick={() => {
              navigate(`/${data.membername}`);
            }}
          >
            <Traffic />
            <Text
              $fontSize="20px"
              $fontWeight="600"
              style={{ WebkitTextStroke: "2px red" }}
            >
              {data.membername}
            </Text>
          </OpenBox>
        </CustomOverlayMap>
      ) : (
        <CustomOverlayMap position={center} yAnchor={0.8}>
          <button onClick={onToggle}>
            <Traffic />
          </button>
        </CustomOverlayMap>
      )}
    </>
  );
};

export default CustomOverlay;
