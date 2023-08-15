import React, {useState} from 'react'
import './navbar.css'

import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../../assests/logo.svg'

import { Link } from 'react-router-dom';

const Menu = () =>(
    <>
        <p><a href='#Wgpt3'>WhaT is GPT?</a></p>
        <p><a href='#home'>Homa</a></p>
        <p><a href='#home'>Open AI</a></p>
        <p><a href='#home'>Case Studies</a></p>
        <p><a href='#home'>Library</a></p>
    </>
    )

function Navbar() {
    const[toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='main_card section__padding'>
        <div className='left_card'>
            <img src={logo} alt='gpt-3'/>
            <div className='list'>
                <Menu />
            </div>
        </div>
    
        <div className='right_card'>
            <p><a href='#'>Sign in</a></p>

            <button className='btn' type='button'  >Sign up</button>  

            <div className='mobile_screen_icons'>
                {toggleMenu
                ? <FaTimes cursor='pointer' size={20} color='#fff' onClick={() => setToggleMenu(false)} />
                : <FaBars cursor='pointer' size={20} color='#fff' onClick={() => setToggleMenu(true)} />}

                {
                    toggleMenu &&
                    (
                        <div className='mobile_menu_links_card scale-up-center'>
                         <Menu/>
                        </div>
                    )
                }
            </div>
           
        </div>        
    </div>
  )
}

export default Navbar