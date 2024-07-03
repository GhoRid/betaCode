import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/restaurant" element={<RestaurantPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
