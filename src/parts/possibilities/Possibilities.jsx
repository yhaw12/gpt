import React from 'react'
import './possibilities.css'
import possibility from '../../assests/possibility.png'

function Possibilities() {
  return (
    <div className='poss_main_card section__padding'>
        <div className='poss_card_box'>
            <div className='image'>
                <img src={possibility} alt='poss'/>
            </div>

            <div className='txt_side'>
                <h5>Request Early Access to Get Started</h5>
                <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <h5 className='last_text'>Request Early Access to Get Started</h5>
            </div>

        </div>

    </div>
  )
}

export default Possibilities