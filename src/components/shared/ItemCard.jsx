import React from 'react';

const ItemCard = (props) => {
  return (
    <article key={props.id} className='portfolio_item'>
          <h3>{props.titleH3}</h3>
          <h4>{props.titleH4}</h4>
            <div className='portfolio_item-image'>
              {props.liveURL || props.codeURL ?
                <a href={props.liveURL || props.codeURL}>
                <img src={props.image} alt='' />
                </a> : null}
              {props.liveURL || props.codeURL ?
              <div className='portfolio_item-cta'>
                <a href={props.liveURL || props.codeURL}>{props.icon}</a>
                <h5>{props.titleH5}</h5>
              </div> : null
              }
            </div>
          </article>
  )
}

export default ItemCard;
