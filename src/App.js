import './App.css';
import Navbar from  './components/Navbar'
import React from 'react';
import TextArea from './components/TextArea';
function App(){
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/>
    <TextArea/>
    </>
  );
}

export default App;
