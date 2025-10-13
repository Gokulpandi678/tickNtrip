import { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Login, Register } from "./pages";

const App = () => {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
