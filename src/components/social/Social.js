import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import './social.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faYoutube, faTwitch, faInstagram} from '@fortawesome/free-brands-svg-icons'



const Social = () => {

    const [over, setOver] = useState(false);
    return (
        <div className="soup__social section" 
            style={
                {display:'flex', 
                alignItems:'center', 
                justifyContent:'center', 
                cursor:'pointer', }}>
            <Router>
                <a href='https://www.youtube.com'>
                    <FontAwesomeIcon className="fa-icon" icon={faYoutube} /></a>

                <a href='https://www.instagram.com'>
                    <FontAwesomeIcon className="fa-icon"icon={faInstagram} /></a>

                <a href='https://www.twitter.com'>    
                <FontAwesomeIcon className="fa-icon"icon={faTwitter} /></a>
                
                <a href='https://www.twitch.tv/igartheinfinite'>
                <FontAwesomeIcon className="fa-icon"icon={faTwitch} /></a>
            </Router>
                
        </div>
    )
}

export default Social