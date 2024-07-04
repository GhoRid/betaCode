import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";
import MapPage from "./pages/MapPage/MapPage";
import TestPage from "./pages/TestPage/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/restaurant" element={<RestaurantPage />}></Route>
          <Route path="/map" element={<MapPage />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
