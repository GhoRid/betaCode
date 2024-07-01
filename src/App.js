import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
      <NavigationBar />
    </BrowserRouter>
  );
}

export default App;
