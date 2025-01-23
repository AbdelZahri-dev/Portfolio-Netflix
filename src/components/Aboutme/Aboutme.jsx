import React, { useEffect, useRef } from 'react'
import cards_data_me from '../../assets/cards/Cards_data_me';
import './Aboutme.css'

const Aboutme = ({title, category}) => {

    const cardsRef = useRef();

    const handleWheel = (event)=>{
      event.preventDefault();
      //scroller les cartes de manière horizontale
      cardsRef.current.scrollLeft += event.deltaY;
    
    }
    
    useEffect(()=>{
      cardsRef.current.addEventListener('wheel', handleWheel);
    
    },[])

  return (
    <div className='title-cards'>
      
      <h2>{title?title:"Mes séries 2"}</h2>
      <div className="card-list" ref={cardsRef}>
      {cards_data_me.map((card, index)=>{
        return <div className="card"key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
        </div>
      })}
      
      </div>
      </div>
      
      
  )
}

export default Aboutme