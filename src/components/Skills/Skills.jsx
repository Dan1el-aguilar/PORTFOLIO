import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id='experience'>
        <h5>Skills</h5>
       
        <div className="experience_container">
          <div className="experience_frontend">
              <h3>Frontend</h3>
              <div className='experience_content'>
                  <article className='experience_details'>
                      <h4>HTML</h4>
                  </article>
                  <article className='experience_details'>
                      <h4>CSS</h4>
                  </article>
                  <article className='experience_details'>
                      <h4>Bootstrap</h4>
                  </article>
                  <article className='experience_details'>
                      <h4>Javascript</h4>
                  </article>
                  <article className='experience_details'>
                      <h4>React</h4>
                  </article>
                  <article className='experience_details'>
                      <h4>GitHub</h4>
                  </article>
              </div>
          </div>
          <div className="experience_backend">
          <div className="experience_frontend">
              <h3>BackEnd</h3>
              <div className='experience_content'>
                  <article className='experience_details'>
                      <h4>NodeJS</h4>
                  </article>
                  <article className='experience_details'>
                      <h4>ExpressJS</h4>
                  </article>
                  <article className='experience_details'>
                      <h4>Express-validator</h4>
                  </article>
                  <article className='experience_details'>
                      <h4>MongoDB</h4>
                  </article>
                  <article className='experience_details'>
                      <h4>Mongoose</h4>
                  </article>
                
              </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Skills