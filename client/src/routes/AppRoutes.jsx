// src/routes/Approutes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Apex_Home } from "../utils/GlobalExport";

import { Characters, CharactersDetails } from "../utils/GlobalExport";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Apex_Home />} />

      <Route path="/characters" element={<Characters />} />
      <Route path="/character/:slug" element={<CharactersDetails />} />
    </Routes>
  );
};

export default Approutes;
