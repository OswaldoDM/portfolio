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
    <Hero open = {open} />
    <Projects open = {open} />
    <Footer open = {open} />    
  </>
    );
  }

export default App;
