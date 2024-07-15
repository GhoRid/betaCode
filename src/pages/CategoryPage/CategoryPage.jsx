import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchCategory } from "../../apis/table/table";
import CategoryHeader from "./components/CategoryHeader";
import styled from "styled-components";
import RecommendedPlace from "../../components/RecommendedPlace";
import { locationState } from "../../recoil/locationState/atom";
import { useRecoilValue } from "recoil";

const Container = styled.div``;

const CategoryPage = () => {
  const currrentLocationState = useRecoilValue(locationState);
  const locatione = useLocation();

  console.log(locatione);
  const category = locatione.state.category;

  const { isLoading, data } = useQuery({
    queryKey: ["category", category],
    queryFn: () => fetchCategory(category),
    onError: (e) => {
      console.log(e);
    },
  });

  const recommendedList = data?.data;

  if (isLoading) return <div>로딩중...</div>;

  return (
    <Container>
      <CategoryHeader category={category}></CategoryHeader>
      <RecommendedPlace
        recommendedList={recommendedList}
        locationState={currrentLocationState}
      />
    </Container>
  );
};

export default CategoryPage;
