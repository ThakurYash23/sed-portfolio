//import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ToolsTechnologies from './Components/ToolsTechnologies/ToolsTechnologies';
import Projects from './Components/Projects/Projects';
import AboutMe from './Components/AboutMe/AboutMe';
import ContactMe from './Components/ContactMe/ContactMe';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='toolsTechnologies' element={<ToolsTechnologies/>}></Route>
        <Route path='projects' element={<Projects/>}></Route>
        <Route path='aboutMe' element={<AboutMe/>}></Route>
        <Route path='contactMe' element={<ContactMe/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
