import React from 'react'
import './features.css'
import {features} from './import'

function Features() {
  return (
    <div className='features_main_card'>

        <div className='features_content_card section__padding'>
            <div className='left_side'>
                <h2 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>

                <h5>Request Early Access to Get Started</h5>
            </div>

            <div className='right_side'>
                {
                    features.map((feature)=>(
                        <div className='feature_box'>
                            <h3>{feature.heading}</h3>
                            <p>{feature.text}</p>
                        </div>  
                    ))
                }

            </div>

        </div>
       
    </div>
  )
}

export default Features