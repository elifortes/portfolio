import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
  return (
    <article key={props.id} className='item-card'>
      <h3 className='item-card__title'>{props.title}</h3>
      <h4 className='item-card__subtitle'>{props.subtitle}</h4>
      <div className='item-card__image-container'>
        {props.liveURL || props.codeURL ?
          <a href={props.liveURL || props.codeURL} className='item-card__link'>
            <img src={props.image} alt='' className='item-card__image'/>
          </a> : null}
        {props.liveURL || props.codeURL ?
          <div className='item-card__cta'>
            <a href={props.codeURL || props.liveURL} className='item-card__cta-link'>{props.icon}</a>
            <h5 className='item-card__tech-stack'>{props.techStack}</h5>
          </div> : null
        }
      </div>
    </article>
  )
}

export default ItemCard;
