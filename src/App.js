import React,{Component} from 'react';
import Login from './components/Login';
import Nav from './components/nav';
import Register from './components/Register';
import Dashboard from './Dashboard';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import './components/home.css'


function App() {
  return (
   
      <BrowserRouter >
      {
        (!localStorage.getItem("email"))?(
          <div className="App">
          <Nav />
        <Routes >
        <Route path="/Dashboard"  element={<Dashboard />} />
        <Route path="/Login"  element={<Login />} />
        <Route path="/Register" element={<Register />} />
        </Routes></div>
  ):(
    <Dashboard />
  )
  }

  </BrowserRouter>
  );
}

export default App;
