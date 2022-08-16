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
        <p className='a-sub animate__animated animate__zoomIn'>
              Soy una persona proactiva, organizada 
              y responsable, con buenas relaciones interpersonales.
              Siempre tengo la mejor disposición para la realización de mis labores.
        </p>
        <p className='a-desc animate__animated animate__zoomIn'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ducimus animi itaque dignissimos necessitatibus praesentium optio recusandae molestiae odio officia, nobis eligendi minima aliquam accusamus assumenda, quaerat harum, ab ratione.
        </p>
        <div className="a-award">
          <img src="" alt="" className="a-award-img" />
        </div>
     </div>
    </div>
  )
}

export default About