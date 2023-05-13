import React, { useState } from 'react'
import Logo from "../../assets/logo.svg";
import './footer.scss'
import { useNavigate } from 'react-router';

const Footer = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleEmail = (e: any) => {
    setEmail(e.target.value)
  }  
  return (
    <div className='footer'>
      <div className='footer__right'>
        <img
          onClick={() => navigate("/main")}
          src={Logo}
          alt="logo-img"
        />
        <span onClick={() => navigate('/anime-page')}>anime</span>
        <span>Топ-100</span>
      </div>
      <div className='footer__contacts'>
        <input onChange={handleEmail} type="text" placeholder='Gmail' />
        <button>Send</button>
      </div>
    </div>
  )
}

export default Footer