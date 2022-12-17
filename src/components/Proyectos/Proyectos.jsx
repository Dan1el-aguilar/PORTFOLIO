import React from 'react'
import IMGrolling from '../../assets/rollingcodefront.png'
import IMGclima from '../../assets/imgAppClima.png'
import IMG3 from '../../assets/portfolio3.jpg'
import './proyectos.css'

const Proyectos = () => {

  const datos = [
    {
      id: 1,
      image: IMGrolling,
      titulo: "Pagina de administracion escolar",
      github: "https://github.com/goarguello/project3-rollingcodeschool",
      demo: "https://rollingcodeschool.netlify.app"
    },
    {
      id: 2,
      image: IMGclima,
      titulo: "App del Clima",
      github: "https://github.com/marcosarias21/weather-app",
      demo: "https://weather-app-ffdm.netlify.app"
    },
    {
      id: 3,
      image: IMG3,
      titulo: "Titulo",
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels"
    }
  ]

  return (
    <section id='proyectos'>
     
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          datos.map(({id, image, titulo, github, demo}) => {
            return(
              <article key={id} className='portfolio_items'>
                <div className="portfolio_item-image">
                  <img src={image} alt={titulo} />
                </div>
                  <h3>{titulo}</h3>
                <div className="portfolio items_cta">
                  <a href={github} className='btn g' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} target='_blank' rel="noreferrer" className='btn d'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Proyectos