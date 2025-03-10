import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'




const TitleCards = ({title, category}) => {

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
      
      <h2>{title?title:"Mes séries"}</h2>
      <div className="card-list" ref={cardsRef}>
      {cards_data.map((card, index)=>{
        return <div className="card" key={index}>
<img src={card.image} alt="" />
<p>{card.name}</p>
        </div>


      })}


      </div>

    </div>
  )
}

export default TitleCards