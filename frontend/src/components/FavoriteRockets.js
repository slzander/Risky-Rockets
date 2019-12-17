import React from 'react'
import RocketCard from './RocketCard'

export default function FavoriteRockets({ favorites, cardClick }){
    // const favoriteCards = favorites.map(favorite => {
    //     <RocketCard
    //         rocket={favorite}
    //         cardClick={cardClick} />
    // })
    
    return(
        <div>
            <h1>Favorites</h1>
            {/* {favoriteCards} */}
        </div>
    )
}