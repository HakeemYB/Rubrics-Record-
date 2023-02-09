import Header from "./components/Header.js";
import Student from "./components/pages/Student";
import ClassVI from "./components/pages/ClassVI";
import Skills from './components/pages/Skills';
import Project from './components/pages/gradeVI/Project.js';
import Rubrics from "./components/Rubrics.js";

import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Detailrub from "./components/Detailrub.js";
import Homepage from "./components/Homepage.js";
import React from "react";

import Home from "./components/login/Home";
import Login from "./components/login/Login";
import Details from "./components/login/Details";
import Errror from "./components/login/Errror";
import Appa from "./components/pages/src/Appa.js";
import ClassVII from "./components/pages/ClassVII.js";
import ClassVIII from "./components/pages/ClassVIII.js";
import Add from "./components/pages/src/student/Add.js";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/Rubrics" element={<Rubrics />} />
        <Route exact path="/Appa" element={<Appa />}></Route>
        <Route exact path="/Detailrub" element={<Detailrub />} />
        <Route exact path='/Home' element={<Home />}></Route>
        <Route exact path="/Student" element={<Student/>}></Route>
        <Route exact path="/Add" element={<Add/>}></Route>
        <Route exact path="/ClassVI" element={<ClassVI/>}></Route>
        <Route exact path="/ClassVII" element={<ClassVII/>}></Route>
        <Route exact path="/ClassVIII" element={<ClassVIII/>}></Route>
        <Route exact path="/Skills" element={<Skills/>}></Route>
        <Route exact path="/Project" element={<Project />}></Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
        <Route path='*' element={<Errror />} />
      </Routes>

    </>
  )
}


export default App;


