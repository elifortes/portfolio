import React from 'react';

const ItemCard = (props) => {
    let icon = props.icon
    let liveUrl = props.liveUrl || props.repoUrl || null
    return(
    <article key={props.id} className='portfolio_item'>
        <h3>{props.titleH3}</h3>
        <h4>{props.titleH4}</h4>
        <div className='portfolio_item-image'>
            {props.liveUrl || props.repoUrl ? 
                <a href={props.liveUrl || props.repoUrl}> 
                <img src={props.image} alt='' />
                </a> : null}
            {props.repoUrl || props.liveUrl? 
                <div className='portfolio_item-cta'>
                    <a href={props.repoUrl || props.liveUrl} target='_blank'>{props.icon}</a>
                    <h5>{props.titleH5}</h5>
                </div> : null
            }
        </div>
    </article>)
} 

export default ItemCard;
