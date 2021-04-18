import React from 'react';
import Categories from './Categories/Categories';
import Items from './Categories/Items/Items';
import Slider from './Slider/Slider';


const Body = () => {
    return (
        <div className='container'>
            <Slider />
            <Categories />
            <Items />
        </div>
    );
};

export default Body;