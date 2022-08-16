
import './contacto.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contacto = () => {
  const inputName = useRef()
  const inputEmail = useRef()
  const inputMensaje = useRef()
  
  const handleForm = (e) => {
    e.preventDefault()
    let enviado = document.getElementById("enviado")
   emailjs.sendForm('service_p0xdbh3', 'template_pjcla6c', e.target, 'Qyb_g2I_ahzvK_hqz')
  .then(res => {
    if (res.status === 200) {
      inputName.current.value = ''
      inputEmail.current.value = ''
      inputMensaje.current.value = ''
      enviado.classList.remove("mensaje")
       setTimeout(() => { enviado.classList.add("mensaje")},5000)
    }
  })
  .catch(err => console.log(err))
  
}

return (
    <section id='contacto'>
        <h2>Contacto</h2>

        <div className="coontainer contacto_container">
          <div className="contact_options">
            <article className='contact_option'>
              <AiOutlineMail className='contact_option_icon'/>
              <h4>Messenger</h4>
              <h5 className='h5'>Facebook</h5>
              <a href="https://m.me/profile.php?id=100010034970747">Mensaje</a>
            </article>
            <article className='contact_option'>
              <BsWhatsapp className='contact_option_icon'/>
              <h4>Whatsapp</h4>
              <h5 className='h5'>342</h5>
              <a href="mailto:danielaguilar032@gmail.com">Mensaje</a>
            </article>
          </div>
          <form onSubmit={handleForm}>
            <input ref={inputName} type="text" name='name' placeholder='Nombre y apellido' required/>
            <input  ref={inputEmail}  type="email" name='email' placeholder='Mail' required/>
            <textarea ref={inputMensaje} name='mensaje' rows="7" placeholder='Mensaje' required></textarea>
            
            <div className='divButtonSubmit'>
               <button id='enviado' className='btnSubmit enviado mensaje'>Mensaje Enviado!</button>
               <button type='submit' className='btnSubmit'>Enviar</button>
            </div>
          </form>

        </div>
    </section>
  )
}

export default Contacto