import React from 'react'

import About from '../components/about/About';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Skills from '../components/Skills/Skills';
import Proyectos from '../components/Proyectos/Proyectos';
import Contacto from '../components/contacto/Contacto';
import Footer from '../components/Footer/Footer';

const Index = () => {
  return (
    <div>
      <Header/>
      <Main/>
     <About/>
      <Skills/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default Index