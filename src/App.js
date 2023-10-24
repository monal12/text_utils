import './App.css';
import Navbar from  './components/Navbar'
import React from 'react';
import TextArea from './components/TextArea';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
function App(){
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About"/>
    <Routes>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/' element={<TextArea/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
