import React from 'react'
import RocketCard from './RocketCard'

export default function Rockets({ rockets, cardClick }){
    const rocketCards = rockets.map(rocket => {
        return <RocketCard
            rocket={rocket}
            cardClick={cardClick} />
    })
    
    return(
        <div className='rockets'>
            <h1>Rockets</h1>
            {rocketCards}
        </div>
    )
}