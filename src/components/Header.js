import React from 'react'

import Logo from '../assets/weather.png';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='row'>
        <div className='col'>
            <h1 className='d-flex justify-content-center'>
                <img src={Logo} alt='logo' className='logo'/> &nbsp;
                Weather App
            </h1>
        </div>
    </div>
  )
}

export default Header