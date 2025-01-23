import React, { useEffect, useRef } from 'react'
import cards_data_pf from '../../assets/cards/Cards_data_pf';
import './Portfolio.css'

const Portfolio = ({ title }) => {

    const cardsRef = useRef();

    const handleWheel = (event)=>{
      event.preventDefault();
      //scroller les cartes de manière horizontale
      cardsRef.current.scrollLeft += event.deltaY;
    
    }
    
    useEffect(() => {
      if (cardsRef.current) {
          cardsRef.current.addEventListener('wheel', handleWheel);
          return () => cardsRef.current.removeEventListener('wheel', handleWheel);
      }
    },[])

    const handleCardClick = (url) => {
      window.open(url, '_blank'); // Ouvre le lien dans un nouvel onglet
  };
  return (
    <div className='title-cards'>
        <h2>{title ? title : "Mes séries 2"}</h2>
        <div className="card-list" ref={cardsRef}>
            {cards_data_pf.map((card, index) => (
                <div 
                    className="card" 
                    key={index} 
                    onClick={() => handleCardClick(card.url)} 
                    style={{ cursor: 'pointer' }}
                >
                    <img src={card.image} alt={card.name} />
                    <p>{card.name}</p>
                </div>
            ))}
        </div>
    </div>
);
};

export default Portfolio