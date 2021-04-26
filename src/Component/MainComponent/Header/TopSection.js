import React from 'react';
import Cart from '../Body/Cart/Cart';
import Slider from '../Body/Slider/Slider';

const TopSection = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-7">
                    <Slider />
                </div>
                <div className="col-md-5">
                    <Cart/>
                </div>
            </div>
        </div>
    );
};

export default TopSection;