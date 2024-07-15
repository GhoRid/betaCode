import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout";
import MapPage from "./pages/MapPage/MapPage";
import TestPage from "./pages/TestPage/TestPage";
import PlaceInfoPage from "./pages/PlaceInfoPage/PlaceInfoPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/:place" element={<PlaceInfoPage />}></Route>
          <Route path="/map" element={<MapPage />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
