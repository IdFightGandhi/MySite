import React from 'react'
import './social.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faYoutube, faTwitch, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FaYoutube} from'react-icons/fa';
import {IconContext} from 'react-icons';


const Social = () => {
    return (
        <div className="soup__social section" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '100px', padding:'20px', color:"#fff"}}>
            </FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '100px', padding:'20px', color:"#fff"}}>
            </FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '100px', padding:'20px', color:"#fff"}}>
            </FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitch} style={{ fontSize: '100px', padding:'20px', color:"#fff"}}>
            </FontAwesomeIcon>

                
        </div>
    )
}

export default Social