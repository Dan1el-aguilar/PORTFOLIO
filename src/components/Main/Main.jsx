import React from 'react'
import './main.css'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillGithub } from 'react-icons/ai'
import imgPersonal from '../../assets/img_personal.png'

const Main = () => {
  return (
    <div className='main'>
        <div className="main_container">
          <div className="main_content">
        <div className="text">
              {/* <p>Hola</p> */}
              <h1>Daniel Aguilar</h1>
              <div className='full'>
                <p className='full2'>FullStack Depelover</p>
              </div>
              <div className="icons">
                <a className='icon' href="https://www.facebook.com/profile.php?id=100010034970747" target='_blank' rel="noreferrer"><BsFacebook/></a>
                <a  className='icon'  href="https://www.linkedin.com/in/daniel-aguilar-006722217/"  target='_blank' rel="noreferrer">< FaLinkedinIn/></a>
               <a  className='icon w'  href="https://wa.me/543425473314"  target='_blank' rel="noreferrer"><IoLogoWhatsapp/></a> 
                <a  className='icon g'  href="https://github.com/Dan1el-aguilar"  target='_blank' rel="noreferrer"><AiFillGithub/></a>
              </div>
              <div className="buttons">
                <a href="https://www.canva.com/design/DAFDt1Mb924/icvFinxgwZvnj-VY0WhEIg/view?utm_content=DAFDt1Mb924&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank' rel="noreferrer">
                  <button>Descargar CV</button>
                </a>

                {/* <button>sobre mi</button> */}
              </div>
            </div>
          </div>
            <div className='main_img'>
               <img src={imgPersonal} alt="imagen personal" />
            </div>
        </div>
    </div>
  )
}

export default Main