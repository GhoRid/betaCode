import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import Carousel from "./components/Carousel";
import RecommendedPlace from "./components/RecommendedPlace";
import CategoryBox from "./components/CategoryBox";
import { useQuery } from "@tanstack/react-query";
import { fetchRecommandList } from "../../apis/table/table";
import { useEffect, useState } from "react";
import advertiseImag from "../../assets/advertise.png";
import { useRecoilState } from "recoil";
import { locationState } from "./../../recoil/locationState/atom";

const Container = styled.div`
  /* width: 100%; */
  /* position: relative; */
`;

const CarouselBox = styled.div`
  height: 200px;
  margin: 2dvh 3.5dvw;
  position: relative;
`;

const CAROUSEL_IMAGES = [advertiseImag, advertiseImag, advertiseImag];

const HomePage = () => {
  const [currentlocationState, setCurrentLocationState] =
    useRecoilState(locationState);

  useEffect(() => {
    let watchId;

    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          setCurrentLocationState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setCurrentLocationState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setCurrentLocationState((prev) => ({
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

  const { isLoading, data } = useQuery({
    queryKey: ["list"],
    queryFn: fetchRecommandList,
    onError: (e) => {
      console.log(e);
    },
  });

  const recommendedList = data?.data;

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <Container>
      <HomeHeader />
      <CarouselBox>
        <Carousel images={CAROUSEL_IMAGES} />
      </CarouselBox>
      <CategoryBox />
      <RecommendedPlace
        recommendedList={recommendedList}
        locationState={currentlocationState}
      />
    </Container>
  );
};

export default HomePage;
