import styled from "styled-components";
import VirtualizedPage from "./VirtualizedPage";

const Container = styled.div`
  width: 100%;
  height: 92dvh;
`;

const images = [
  "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=500",
  "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=500",
  "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=500",
];

const TestPage = () => {
  return (
    <Container>
      <VirtualizedPage>
        {({ index }) => {
          const modulo = index % images.length;
          const imageIndex = modulo < 0 ? images.length + modulo : modulo;
          return (
            <img
              draggable={false}
              alt="Mountain"
              style={{ width: "100%" }}
              src={images[imageIndex]}
            />
          );
        }}
      </VirtualizedPage>
    </Container>
  );
};

export default TestPage;
