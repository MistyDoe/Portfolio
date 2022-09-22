
import './App.css';
import Banner from './compStatic/Banner.jsx'
import {Routes, Route } from 'react-router-dom';
import AboutMe from './compInfoTabs/AboutMe';
import TechStack from './compInfoTabs/TeckStack';
import Projects from './compInfoTabs/Projects';
import ContactMe from './compInfoTabs/ContactMe';
import Landing from './compInfoTabs/Landing';



function App() {
  return (
    <>
    <Banner/> 
    <div className='Outline'> 
            <Routes>
                <Route exact path = "/aboutme" element= {<AboutMe/>}/>              
                <Route exact path = "/" element = {<Landing/>}/>,
                <Route exact path = "/aboutme" element = {<AboutMe/>}/>,
                <Route exact path = "/teckstack" element = {<TechStack/> }/>,
                <Route exact path = "/projects" element = {<Projects/>}/>,
                <Route exact path = "/contactme" element = {<ContactMe/> }/>
            </Routes>
   </div>    
    </>

  );
}

export default App;
