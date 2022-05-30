import React from 'react';
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MealInfo from "./pages/MealInfo";
import Header from "./components/Header";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/meal/:id" element={<MealInfo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;