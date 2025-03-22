import React from 'react';
import { Navbar } from "./Components/NavComponent/Nav.jsx";
import { Header } from './Components/HeaderCommponent/Header.jsx';
import { Router } from './Components/RouterComponent/Router.jsx';
import { Footer } from './Components/FooterComponent/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;