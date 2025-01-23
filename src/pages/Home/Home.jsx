import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import TitleCards from '../../components/TitleCards/TitleCards';
import Portfolio from  '../../components/Portfolio/Portfolio';
import Dessins from '../../components/Dessins/Dessins';
import Aboutme from '../../components/Aboutme/Aboutme';
import Footer from '../../components/Footer/Footer';
import hero_banner from '../../assets/banierre2.jpg';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import cv_image from '../../assets/CV.jpg';  // Image du CV
import business_card from '../../assets/business_card.jpg';  // Image de la business card


const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero banner" className='banner-img' />
        <div className="hero-caption">
          {!isScrolled && (
            <p>
              Passionné par le développement web, je suis actuellement une formation intensive en qualité de Développeur Web full stack à l’école O’clock. Rigoureux, motivé et créatif, je recherche un stage dès mars 2025 (pour une période de 2 mois) afin de mettre en pratique mes compétences et participer activement à vos projets.
            </p>
          )}
          <div className="hero-btns">
            <button className='btn' onClick={() => setShowCV(true)}>
              <img src={play_icon} alt="Play" />CV
            </button>
            <button className='btn dark-btn' onClick={() => setShowContact(true)}>
              <img src={info_icon} alt="More info" />Contact
            </button>
          </div>
          <TitleCards />
        </div>
      </div>

      <div className="more-cards">
        <div id="portfolio">
          <Portfolio title={"Portfolio"} />
        </div>
        
        <div id="dessins">
          <Dessins title={"Dessins"} />
        </div>
        <div id="about-me">
          <Aboutme title={"About me"} />
        </div>
      </div>

      <Footer />

      {/* Overlay pour le CV */}
      {showCV && (
        <div className="overlay">
          <div className="overlay-container">
            <img src={cv_image} alt="CV" className="overlay-image" />
            <button className="close-btn" onClick={() => setShowCV(false)}>✖</button>
          </div>
        </div>
      )}

      {/* Overlay pour la Business Card */}
      {showContact && (
        <div className="overlay">
          <div className="overlay-container">
            <img src={business_card} alt="Business Card" className="overlay-image" />
            <button className="close-btn" onClick={() => setShowContact(false)}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
