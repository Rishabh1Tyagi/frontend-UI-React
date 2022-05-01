import React from "react";
import Card from "./components/UI/Card";
import BusinessInfo from "./components/BusinessInfo/BusinessInfo";
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
     <Routes>
     <Route path="/" element={<Card />} />
     <Route path="/business" element={<BusinessInfo />} />
     </Routes>
    </div>
    </>
  );
}

export default App;
