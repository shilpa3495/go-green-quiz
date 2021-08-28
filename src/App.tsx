import React from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { Quiz } from "./Pages/Quiz";
import { Result } from "./Pages/Result";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./Component/Navbar/context";

function App() {
  const { theme } = useTheme()!;
  return (
    <div className={`app-theme-container ${theme ? "light-theme" : "dark-theme"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
