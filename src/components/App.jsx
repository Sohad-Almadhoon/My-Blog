import React from 'react'
import AdminBoard from './AdminBoard';
import Footer from './Footer';
import LogIn from './LogIn';
import NavBar from "./NavBar";
import './style.css';
function App() {
  return (
    <>
      <NavBar />
      <LogIn />
      <AdminBoard/>
      <Footer/>
    </>
  );
}

export default App