import React from 'react'
import './blog.css'
import  {blog1,blog2,blog3,blog4,blog5} from './importData'
import Article from '../../components/article/Article'

function Blog() {
  return (
    <div className='blog_main_card'>
      <div className="blog_main_box">
        <div className='main_card_text'>
          <h1 className='gradient__text'>A lot is happening, <br />
          We are blogging about it.</h1>
        </div>

        <div className="main_blog">
            <div className="left_card">
              <Article image={blog1} date="Sep 26, 2021" tittle="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
            <div className="right_card">
              <Article image={blog2} date="Sep 26, 1987" tittle="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              <Article image={blog3} date="Sep 26, 1999" tittle="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              <Article image={blog4} date="Sep 26, 2016" tittle="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              <Article image={blog5} date="Sep 26, 1996" tittle="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
        </div>
      </div>   
    </div>
  )
}

export default Blog