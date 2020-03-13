import React from 'react';
import './LaCard.css';

const LaCard = ( { cards, select, search } ) => {
    const cardsList = cards.map(( card, index ) => {
        return (
            <div className='card' key={ index } onClick={ () => { select( card.flight_number ) } } >
                <img src= { card.links.mission_patch_small } alt={ card.mission_name } />
                <div className='card-data'>
                    <p>{ card.mission_name }</p>
                    <p>{ card.launch_site.site_name}</p>
                </div>
                <img src= { card.links.mission_patch_small } alt={ card.mission_name } />
            </div>    
        )
    })
    return (
        <div className='box' >
            <input type='text' id='search' placeholder='Search ...' onChange={ search } />
            <div className='box-with-cards'>
                { cardsList }
            </div>
        </div>
    );
}

export default LaCard;