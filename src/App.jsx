import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";

import Home from "./pages/Home";
import Tech from "./pages/Tech";
import Ubi from "./pages/Ubi";
import Covid from "./pages/Covid";
import Older from "./pages/Older";
import Thanks from "./pages/Thanks";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/unemployment" element={<Home />} />
        <Route path="/unemployment/tech" element={<Tech />} />
        <Route path="/unemployment/ubi" element={<Ubi />} />
        <Route path="/unemployment/covid" element={<Covid />} />
        <Route path="/unemployment/older" element={<Older />} />
        <Route path="/unemployment/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
};

export default App;
