import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import Header from "./components/Header";
import AboutUs from './components/AboutUs';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Working from './components/MainPage/Working';
import Welcome from './components/MainPage/Welcome';
import WhatWeDo from './components/MainPage/WhatWeDo';




function App() {
  return (
     <div className="App bg-light">
      <Header></Header>
      <Routes>
        
        <Route path='/about' ></Route>
        <Route path='/jobs'>
         
        </Route>
        <Route path='/contactus' ></Route>
        <Route path='/login' ></Route>
        <Route path='/register'>
          
        </Route>
     
        
      </Routes>
	   <Welcome></Welcome>
	  <WhatWeDo/>
	 
	  <Working></Working>
      <Footer></Footer>
      <ToastContainer className="mt-5 pt-2" />
    </div>
  );
}

export default App;
