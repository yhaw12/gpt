import React from 'react'
import './brands.css'

import { shopify, google, atlassian, dropbox, slack  } from './imports'

function Brands() {
  return (
    <div className='brand_card'>

        <div className='img_card'>
            <img src={google} alt='gogle'/>
            <img src={slack} alt='slk'/>
            <img src={atlassian} alt='atl'/>
            <img src={dropbox} alt='drpbx'/>
            <img src={shopify} alt='shop'/>
        </div>
    </div>
  )
}

export default Brands