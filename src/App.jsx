import { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";

const App = () => {
  return (
    <div className="min-h-screen mx-3 lg:mx-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
