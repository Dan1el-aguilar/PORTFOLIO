import React from 'react'
import 'animate.css'
import './about.css'

const About = () => {
  return (
    <div className='a' id='sobremi'>
     <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://picsum.photos/seed/picsum/500/300" alt="imagen" className="a-img" />
        </div>
     </div>
     <div className="a-right">
        <h1 className='a-title'>Sobre Mi</h1>
        <p>
              Soy una persona proactiva, organizada 
              y responsable, con buenas relaciones interpersonales.
              Siempre tengo la mejor disposición para la realización de mis labores.
        </p>
        <p>
              En busqueda de oportunidades que me permitan formar parte de un equipo de trabajo en donde pueda continuar
              desarrollando mi perfil profesional.
              comprometiendome a sumar valor a partir de mis competencias, experiencias y formacion. 
        </p>
        <div className="a-award">
          <img src="" alt="" className="a-award-img" />
        </div>
     </div>
    </div>
  )
}

export default About