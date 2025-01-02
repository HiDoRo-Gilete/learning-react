import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Title from "./pages/Title";
import InforUser from "./pages/InforUser";
import Login from "./pages/Login";
import LevelA1 from "./pages/levels/a1";
import SignUp from "./pages/Signup"

function App() {
  const Levels = [{level: 'Beginner A1',chapters:32, link: 'levela1'},
    {level:'Elementary A2',chapters:32,link: 'login'},
    {level:'Intermedia B1',chapters:32,link: 'login'},
    {level:'Upper Intermedia B2',chapters:32,link: 'login'},
    {level:'Advanced C1',chapters:32,link: 'login'}];
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home items = {Levels}/>} />
        <Route path="title" element={<Title />} />
        <Route path="infor_user" element={<InforUser />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="levela1" element={<LevelA1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App