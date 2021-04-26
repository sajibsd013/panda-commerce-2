import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const mapStateToProps = state => {
    return {
        featuresData: state.featuredData
    }
}

class Slider extends Component {
    state = {
        items: this.props.featuresData,
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
            const nextIndex = this.state.activeIndex === this.props.featuresData.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setActiveIndex(nextIndex)
        }

        const previous = () => {
            if (this.state.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? this.props.featuresData.length - 1 : this.state.activeIndex - 1;
            this.setActiveIndex(nextIndex)

        }

        const goToIndex = (newIndex) => {
            if (this.state.animating) return;
            this.setActiveIndex(newIndex);
        }


        const sliderItems = this.props.featuresData.map(item => (
            <CarouselItem
                onExiting={() => this.setAnimating(true)}
                onExited={() => this.setAnimating(false)}
                key={item.id}
            >
                <div >
                    <div className="row align-items-center " >
                        <div className="col-lg-5">
                            <img src={item.image} className="d-block w-100" alt="..." />
                        </div>

                        <div className="col-lg-7 ">
                            <h3>{item.name} </h3>
                            <p>{item.description} </p>
                            <h4>
                                <span className='text-danger'>${item.price}</span>
                                <small><del className='text-muted'> ${item.oldPrice}</del></small>
                            </h4>
                            <Button color='dark' className="my-2 w-50">Buy Now </Button>
                        </div>
                    </div>
                </div>

            </CarouselItem>
        ))

        return (
            <div id="slider" className="py-5" >
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

