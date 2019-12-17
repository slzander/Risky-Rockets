import React from 'react'

export default function RocketCard({ rocket, cardClick }){
    const success = () => {
        if (rocket.launch_success){
            return <p>Successful Mission</p>
        } else {
            return <p>Failed Mission</p>
        }
    }
    
    return(            
        <div className='rocket-card' onClick={() => cardClick(rocket)}>
            {/* <img src={rocket.links.flickr_images[0]} /> */}
            <h2>{rocket.rocket.rocket_name}</h2>
            <h2>{rocket.mission_name}</h2>
            {success}
            <a href={rocket.link}>Launch Video</a>
        </div>
    )
}