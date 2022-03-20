import React from 'react'
import AddCity from '../components/AddCity';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Info from '../components/Info';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='Container'>
        <div className='home'>
            <Header/>
            <AddCity/>
            <Info/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home