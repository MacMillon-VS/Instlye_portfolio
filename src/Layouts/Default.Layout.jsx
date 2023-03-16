import React from "react";
import Navbar1 from '../Components/Header/Navbar1';
import NavbarTry from '../Components/Header/NavbarTry';
import NavbarSub from '../Components/Header/NavbarSub';
import Footer from '../Components/Footer/Footer';
const DefaultLayout = ({ children }) => {
  return (
    <div>
    <NavbarSub/>
      <Navbar1 />
      {children}
      <Footer/>
    </div>
  );
};

export default DefaultLayout;
