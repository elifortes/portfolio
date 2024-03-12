import React from 'react';
import ItemCard from './ItemCard';

const Section =(props) => {
    
    return (
    <section id={props.id} className='cardSection'>
        <h2>{props.title}</h2>
        <div className='container portfolio_container'>
        {
          props.cardsData && props.cardsData.map(({demo, icon, id, image, github,  titleh3, titleh4, titleh5 } = props.cardsData) => {
            return  <ItemCard icon={icon} id={id} image={image} liveUrl={github} repoUrl={demo}titleH3={titleh3} titleH4={titleh4} titleH5={titleh5} />
          })
        }
        </div>
      </section>
    )
}

export default Section;