import React from 'react';
import style from './cards.module.css'

export default function Card({name, max, min, img, onClose}) {

 
  return (<div className={style.cards}>
    <button onClick={onClose}>x</button>     
    <h4>{name}</h4> 
    <div className={style.carta}>
      <div className={style.clima}>
        <span>Max</span>
        <span>{max}°</span>
      </div>
      <div className={style.clima}>
        <span>Min</span>
        <span>{min}°</span>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} />
    </div>
  </div>

  )
 
};