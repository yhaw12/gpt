import React from 'react'
import './whatsgpt.css'
import { whatsgptdata } from './import'


function Whatsgpt() {
  return (
    <div className='gpt_main_card'>

        <div className='gpt_card'>
            <div className='first_card'>
                <h2>What is GPT-3</h2>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            <div className='middle_card'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <div className='gradient__text'>
                    <h4 >Explore The Library</h4>
                </div>
            </div>
            <div className='last_card'>
                {
                    whatsgptdata.map(item=>(
                        <div className='last_card_box'>
                            <h2>{item.name}</h2>
                            <p>{item.paragraph}</p>
                        </div>
                    ))
                }
            <div>
        </div>

            </div>
        </div>

        

    </div>
  )
}

export default Whatsgpt