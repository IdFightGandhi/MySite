import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className="ggpt3__header-section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">The Suspicious Soup Podcast! </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia gravida est eget laoreet. 
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Join Our Newsletter</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>Check out our contributors</p>
                </div>

                {/* <div className="gpt3__header-image">
                    <img src={ai} alt="ai" />
                </div> */}
            </div>
        </div>
    )
}

export default Header
