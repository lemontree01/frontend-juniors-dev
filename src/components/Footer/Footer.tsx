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
        className='footer__logo'
          onClick={() => navigate("/main")}
          src={Logo}
          alt="logo-img"
        />
      </div>
      <div className='footer__center'>
        <span onClick={() => navigate('/catalog')}>Каталог</span>  
        <span onClick={() => navigate('/top-100')}>Топ-100</span>
        <span onClick={() => navigate('/collections')}>Коллекция</span>
      </div>
      <div className='footer__contacts'>
        <p>©2023 Animeon</p>
      </div>
    </div>
  )
}

export default Footer