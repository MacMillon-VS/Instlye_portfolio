import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Analytics } from '@vercel/analytics';
import DefaultHOC from './HOC/Default.HOC';
import Homepage from "./Pages/Homepage";
import Pricing from "./Pages/Pricing";
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import ProjectDetailPage from "./Pages/ProjectDetailPage";
import NotFound from "./Pages/NotFound";

const Home = DefaultHOC(Homepage);
const Price = DefaultHOC(Pricing);
const Contact = DefaultHOC(ContactPage);
const About = DefaultHOC(AboutPage);
const ProjectDetails = DefaultHOC(ProjectDetailPage);


function App() {
  const analytics = Analytics({
    projectId: 'prj_EZ0uTiNMVfpaPCQAP7Z8qb61cmdg',
  });
  analytics.page();
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/pricing" exact element={<Price/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/projects/:id" exact element={<ProjectDetails/>} />
          <Route path="/*" exact element={<NotFound/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
