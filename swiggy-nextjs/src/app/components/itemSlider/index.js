'use client';
import React, { useState } from 'react';
import { foodItem } from '../../data/foodItem.js';
import './styles.css';

export default function ItemSlider() {
    const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
    };

    const slidePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
    };

    return (
        <>  
            <div  className='slider'>
            <div className='slide-container'>
            <button className="slider-button" onClick={slidePrev}>&lt;-</button>
            <button className="slider-button" onClick={slideNext}>-&gt;</button>
            </div> 

            <h1>What's on your mind?</h1>
            <div className="food-item">
                {foodItem.slice(currentIndex, currentIndex + 6).map((item, index) => (
                    <img key={index} src={CDN_URL + item.imageId} alt={item.action.text} />
                ))}
            </div>
            <hr/>
            </div>
            
        </>
    );
}



