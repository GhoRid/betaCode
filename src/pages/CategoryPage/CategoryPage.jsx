import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../../apis/table/table";
import CategoryHeader from "./components/CategoryHeader";
import styled from "styled-components";
import RecommendedPlace from "../../components/RecommendedPlace";
import { locationState } from "../../recoil/locationState/atom";
import { useRecoilValue } from "recoil";
import Loader from "../../components/Loader";

const Container = styled.div``;

const CategoryPage = () => {
  const currrentLocationState = useRecoilValue(locationState);

  const { category } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["category", category],
    queryFn: () => fetchCategory(category),
    onError: (e) => {
      console.log(e);
    },
  });

  const recommendedList = data?.data;

  if (isLoading) {
    return <Loader />;
  }

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
