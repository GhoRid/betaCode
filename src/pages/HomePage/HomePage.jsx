import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import Carousel from "./components/Carousel";
import RecommendedPlace from "./components/RecommendedPlace";
import CategoryBox from "./components/CategoryBox";
import { useQuery } from "@tanstack/react-query";
import { fetchRecommandList } from "../../apis/table/table";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const CarouselBox = styled.div`
  height: 170px;
  margin: 2dvh 3.5dvw;
  position: relative;
`;

const CAROUSEL_IMAGES = [
  "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=300",
  "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=300",
  "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=300",
  // "https://placehold.co/500x200",
  // "https://placehold.co/500x200",
  // "https://placehold.co/500x200",
  // "https://placehold.co/500x200",
];

const HomePage = () => {
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
      watchId = navigator.geolocation.watchPosition(
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
        locationState={locationState}
      />
    </Container>
  );
};

export default HomePage;
