import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componets/Header/Header";
import HomePage from "./Page/HomePage";
import CharacterDetail from "./Page/CharacterDetail";
import Acercade from "./Page/Acercade";
function App() {
  const [genderFilter, setGenderFilter] = useState("All");

  return (
    <Router>
      <Header setGenderFilter={setGenderFilter} />
      <Routes>
        <Route path="/" element={<HomePage genderFilter={genderFilter} />} />
        <Route path="/personaje/:id" element={<CharacterDetail />} />
        <Route path="/acercade" element={<Acercade />} />
      </Routes>
    </Router>
  );
}

export default App;
