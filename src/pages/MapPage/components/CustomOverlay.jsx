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

const TextBox = styled.div`
  padding: 4px 8px;
  background-color: #4887e4;
  border-radius: 4px;
  border: 1px solid #4887e4;
  position: absolute;
  top: -32px;
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
            <TextBox>
              <Text $fontSize="20px" $fontWeight="500" $textColor="white">
                {data.membername}
              </Text>
            </TextBox>
            <Traffic />
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
