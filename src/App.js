  import React from 'react';
  import Navbar from './components/Navbar';
  import HeroSection from './components/HeroSection';
  import About from './Pages/About';
  import Projects from './Pages/Projects';    
  import Skills from './Pages/Skills';
  import Contact from './Pages/Contact';
  import Footer from './components/Footer';
  function App() {
    return (
      <div className='container mx-auto'>
        <Navbar />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    )
  }

  export default App;


  