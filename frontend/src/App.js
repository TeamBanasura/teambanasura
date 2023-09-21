import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';



const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet ></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App