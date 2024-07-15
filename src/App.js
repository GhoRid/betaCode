import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout";
import MapPage from "./pages/MapPage/MapPage";
import TestPage from "./pages/TestPage/TestPage";
import PlaceInfoPage from "./pages/PlaceInfoPage/PlaceInfoPage";
import ScrollToTop from "./components/ScrollToTop";
import NavigationBar from "./components/NavigationBar";
import SearchPage from "./pages/SearchPage/SearchPage";
import ResultPage from "./pages/ResultPage/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":place" element={<PlaceInfoPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/result" element={<ResultPage />} />
          <Route path="test" element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
