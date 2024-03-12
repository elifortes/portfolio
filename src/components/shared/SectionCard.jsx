import React from 'react';
import ItemCard from './ItemCard';


const SectionCard = (props) => {

  return (
    <section id={props.id} className='cardSection'>
    <h2>{props.title}</h2>
    <div className='container portfolio_container'>
    {
      props.cardsData && props.cardsData.map(({codeURL, id, icon, image, liveURL, titleH3, titleH4, titleH5 } = props.cardsData) => {
        return (
          <ItemCard codeURL={codeURL} key={id} icon={icon} image={image} liveURL={liveURL} titleH3={titleH3} titleH4={titleH4} titleH5={titleH5} />
        )
      })
    }

    </div>
  </section>
);
}

export default SectionCard;
