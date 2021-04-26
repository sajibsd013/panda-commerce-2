import React from 'react';
import TopSection from '../Header/TopSection';
import Categories from './Categories/Categories';
import Items from './Categories/Items/Items';



const Body = () => {
    return (
        <div className='container'>
            <TopSection/>
            <Categories />
            <Items />
        </div>
    );
};

export default Body;