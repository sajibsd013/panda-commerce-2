import React from 'react';
import Product from '../../../../Data/data';
import './Slider.css';


const Slider = (props) => {

    const sliderItem = props.Product.map(data => (
        <div className={data.class}>
            <div className="row align-items-center ">
                <div className="col-md-7 ">
                    <h1>{data.name} </h1>
                    <p>{data.description} </p>
                    <h3 style={{ color:' #DA2064'}}>{data.price}$</h3>
                    <button  style={{ backgroundImage: "linear-gradient(#EB4687,#E91C69)" }} className="btn text-white my-2">Buy Now </button>
                </div>
                <div className="col-md-5">
                    <img src={data.image} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    ))


    return (
        <div id="slider" className="py-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {sliderItem}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Slider;