import React from 'react';
import Product from '../../../Data/data';
import Categories from './Categories/Categories';
import Items from './Categories/Items/Items';
import Slider from './Slider/Slider';


const Body = () => {
    return (
        <div className='container'>
            <Slider Product={Product.slider}/>
            <Categories Product={Product.Categories}/>
            <Items Product={Product.items}/>
        </div>
    );
};

export default Body;