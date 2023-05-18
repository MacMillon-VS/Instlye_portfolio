import React from "react";
import Navbar1 from '../Components/Header/Navbar1';
import Sidebar from '../Components/Header/Sidebar';
import Footer from '../Components/Footer/Footer';
import useScrollToTop from "../utils/Scroll to top";
const DefaultLayout = ({ children }) => {
  useScrollToTop();
  return (
    <div>
    <Sidebar/>
      <Navbar1 />
      {children}
      <Footer/>
    </div>
  );
};

export default DefaultLayout;
