import React from 'react'
import './cta.css'

function Cta() {
  return (
    <div className='cta_main_card section__padding'>
        <div className='cta_box'>
            <div className='left'>
                <h5>Request Early Access to Get Started</h5>
                <p>Register today & start exploring the endless possiblities.</p>
            </div>
            <div className='right'><button type='button' className='btn'>Get Started</button></div>
            
        </div>
    </div>
  )
}

export default Cta