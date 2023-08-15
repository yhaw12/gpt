import React from 'react'
import './footer.css'
import logo from '../../assests/logo.svg'

function Footer() {
    const footerDate = ()=>{
        new Date().getFullYear();
    }

  return (
    <div className="main_footer">
        <div className="footer_box">
            <div className="top_text">
                <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
                <h5>Request Early Access</h5>
            </div>

            <div className="bt_section">
                <div className="bt_section_card">
                    <div className="left_card">
                        <img src={logo} alt="site logo" />
                        <h5>Blankson Creative Designs Ghana,  <br />All Rights Reserved</h5>
                    </div>
                    <div className="right_card">
                        <div className="card_boxes">
                            <h3>links</h3>

                            <ul> 
                                <li><a href='#Overons'>Overons</a></li>
                                <li><a href='#Social'>Social media</a></li>
                                <li><a href='#Counters'>Counter</a></li>
                               <li><a href='#Contact'>Contact</a></li>
                            </ul>
                           
                        </div>
                        <div className="card_boxes">
                            <h3>Company</h3>
                            
                            <ul>
                                <li><a href='#'>Terms & Condition</a></li>
                                <li><a href='#'>Privacy Policy</a></li>
                                <li><a href='#'>Contact</a></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="card_boxes">
                            <h3>Get in touch</h3>
                            <ul>
                                <li><a href='#'>Blanskon Creative <br />
                                Ghana</a></li>
                                <li><a href='#'>549-23564</a></li>
                                <li><a href='#'>info@payment.net</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>© {footerDate} GPT-3. All rights reserved.</p>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Footer