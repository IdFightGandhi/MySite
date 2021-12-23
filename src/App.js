import React from 'react'

import { Social, CTA, Navbar, Contributors } from './components';
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
import './App.css';
const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Social />
            <WhatGPT3 />
            <Contributors />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
            
        </div>
    )
}

export default App
