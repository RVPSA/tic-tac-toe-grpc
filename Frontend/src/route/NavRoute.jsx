import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../component/Welcome";
import GameBoard from "../component/GameBoard";

const NavRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Welcome></Welcome>}></Route>
          <Route path="/game" element={<GameBoard></GameBoard>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavRoute;
