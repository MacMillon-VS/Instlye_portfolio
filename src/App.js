import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Header/Navbar';
import DefaultHOC from './HOC/Default.HOC';
import Homepage from "./Pages/Homepage";
import Pricing from "./Pages/Pricing";
const Test = DefaultHOC(Homepage);
const Price = DefaultHOC(Pricing);
function App() {
  return (
    <div >
      
      <Router>
        <Routes>
          <Route path="/" exact element={<Test/>} />
          <Route path="/pricing" exact element={<Price/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
