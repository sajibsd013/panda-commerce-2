import React, { Component } from 'react';
import './Slider.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        sliderData: state.sliderData
    }
}

class Slider extends Component {
    state = {
        items: this.props.sliderData,
        activeIndex: 0,
        animating: false
    }

    setAnimating = animationState => {
        this.setState({
            animating: animationState
        })
    }
    setActiveIndex = index => {
        this.setState({
            activeIndex: index
        })
    }

    render() {

        const next = () => {
            if (this.state.animating) return;
            const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setActiveIndex(nextIndex)
        }

        const previous = () => {
            if (this.state.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
            this.setActiveIndex(nextIndex)

        }

        const goToIndex = (newIndex) => {
            if (this.state.animating) return;
            this.setActiveIndex(newIndex);
        }


        const sliderItems = this.state.items.map(item => (
            <CarouselItem
                onExiting={() => this.setAnimating(true)}
                onExited={() => this.setAnimating(false)}
                key={item.id}
            >
                <div >
                    <div className="row align-items-center ">
                        <div className="col-md-7 ">
                            <h1>{item.name} </h1>
                            <p>{item.description} </p>
                            <h3 style={{ color: ' #DA2064' }}>{item.price}$</h3>
                            <button style={{ backgroundImage: "linear-gradient(#EB4687,#E91C69)" }} className="btn text-white my-2">Buy Now </button>
                        </div>
                        <div className="col-md-5">
                            <img src={item.image} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>

            </CarouselItem>
        ))

        return (
            <div id="slider" className="py-5">

                <Carousel
                    activeIndex={this.state.activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators
                        items={this.state.items}
                        activeIndex={this.state.activeIndex}
                        onClickHandler={goToIndex}
                    />

                    {sliderItems}
                    <CarouselControl
                        direction='prev'
                        directionText='Previous'
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction='next'
                        directionText='Next'
                        onClickHandler={next}
                    />
                </Carousel>

            </div>
        );
    }


}

export default connect(mapStateToProps)(Slider);

