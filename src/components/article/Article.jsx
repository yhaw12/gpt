import React from 'react'
import './article.css'



function Article({image,date,tittle}){
  return (
    <div className='article_main'>

        <div className="image_card">
            <img src={image}/>
        </div>
        <div className="main_content">
          <p>{date}</p>
          <h3>{tittle}</h3>

          <h5>Read Full Article</h5>
        </div>      
    </div>
  )

}

export default Article