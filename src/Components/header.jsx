import React from 'react'
import Logo from '../images/thelogo.png'
import './style.css'

const header = () => {
    return (
        <div className='mainHead'>
            <img src={Logo} alt="" width='100px'/>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>FEEDBACK</li>
            </ul>
        </div>
        
    )
}

export default header