import { useState } from "react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";

function App() {

  const [open, setOpen] = useState(false);
    
  const handleClick = () => setOpen(!open);       
  
  return (
  <>
    <NavBar open = {open} handleClick = {handleClick} /> 
    <Hero open = {open} handleClick = {handleClick} />
    <Projects open = {open} handleClick = {handleClick} />
    <Footer open = {open} handleClick = {handleClick} />
  </>
    );
  }

export default App;
