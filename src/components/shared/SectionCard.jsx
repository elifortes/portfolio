import React from 'react';
import './SectionCard.css'
import ItemCard from './ItemCard';

const SectionCard = (props) => {
  return (
    <section key={props.id+Math.random()} className='section-card'>
      <h2 className='section-card__title'>{props.title}</h2>
      <div className='container section-card__container'>
        {
          props.cardsData && props.cardsData.map(
            (data) => <ItemCard key={data.id} {...data}/>
          )
        }
      </div>
    </section>
  );
}

export default SectionCard;
