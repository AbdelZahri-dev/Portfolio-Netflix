import React, { useState, useEffect } from 'react';
import'./Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/banierre2.jpg'
import my_profil from '../../assets/my_profil.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'




const Home = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  // Fonction de gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Écouteur d'événement sur le scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'écouteur au démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home'>
<Navbar/>
<div className="hero">
  <img src={hero_banner} alt="" className='banner-img'/>
  <div className="hero-caption">
  {!isScrolled && (
    <p>Passionné par le développement web, je suis actuellement une formation intensive en qualité de Développeur Web full stack à l’école O’clock. Rigoureux, motivé et créatif, je recherche un stage dès mars 2025 (pour une période de 2 mois) afin de mettre en pratique mes compétences et participer activement à vos projets.</p>
  )}
  <div className="hero-btns">
    <button className='btn'><img src={play_icon} alt="" />Play</button>
    <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
     </div>
     <TitleCards/>
    </div>
  </div>
  <div className="more-cards">
  <div id="blockbuster-movies">
  <TitleCards title={"Hard skills"}/>
  </div>
  <div id="only-on-netflix">
  <TitleCards title={"Soft skills"}/>
  </div>
  <div id="upcoming">
  <TitleCards title={"Langues"} />
  </div>
  <div id="top-picks">
  <TitleCards title={"Portfolio"}/>
  </div>

  </div>
  <Footer/>
 </div>
  )
}

export default Home