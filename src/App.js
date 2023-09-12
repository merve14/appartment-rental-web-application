import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Housing from "./pages/Housing.js";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/housing/:id" element={<Housing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
