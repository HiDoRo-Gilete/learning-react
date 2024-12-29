import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Title from "./pages/Title";
import InforUser from "./pages/InforUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="title" element={<Title />} />
        <Route path="infor_user" element={<InforUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App