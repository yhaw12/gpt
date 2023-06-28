import React from 'react'
import './header.css'

import ai from '../../assests/ai.png'
import people from '../../assests/people.png'

function Header() {
  return (
    <div className='header_main_card'>
        <div className=' left_card'>
            <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
            <p>Yet bed for travelling assistance indulgence unpleasing.
                Not thought all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                Party we years to order allow asked of.
            </p>

            <form action='' method='POST'>
                <input placeholder='Your Email Address'/>
                <button className='btn' type='button'>Get Started</button>
            </form>

            <div className='bt_imgs'>

                <img src={people} alt='views'/>

                <h5> 1600 people requested access or visit in the last 24 hours</h5>

            </div>
        </div>
        <div className='right_card'>
            <img src={ai}  alt='img'/>
        </div>

    </div>
  )
}

export default Header