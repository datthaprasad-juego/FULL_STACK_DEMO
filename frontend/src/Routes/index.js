import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import GamePlay from "../Pages/GamePlay";
import Search from "../Pages/Search";
import Profile from "../Pages/Profile";
import JoinUs from "../Pages/JoinUs";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamePlay" element={<Search />} />
        <Route path="/battle" element={<GamePlay />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="joinus" element={<JoinUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
