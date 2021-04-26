import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardFooter, CardGroup, Button, CardTitle, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import ItemModal from '../ItemModal';
import { ADD_ITEM, SELECT_ITEM } from '../../../../../../Redux/ActionTypes';



const mapDispatchToProps = dispatch => {
    return {
        selectItem: (item, type) => dispatch({
            type: type,
            item: item
        })
    }
}

const mapStateToProps = state => {
    return {
        SelectedItem: state.SelectedItem
    }
}

class ItemCard extends Component {

    state = {
        modalOpen: false,
        isAlertShow: false
    }

    onSelect = (data) => {
        this.props.selectItem(data, SELECT_ITEM);
        this.setState({
            modalOpen: !this.state.modalOpen,
        })
    }

    addToCart = (data) => {
        this.props.selectItem(data, ADD_ITEM);
        this.setState({
            isAlertShow: !this.state.isAlertShow
        })
        setTimeout(() => {
            this.setState({
                isAlertShow: !this.state.isAlertShow
            })
        }, 600)
    }

    onModalClick = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    onAlertShow = () => {
        this.setState({
            isAlertShow: !this.state.isAlertShow
        })
    }

    render() {

        let AlertShow = (
            <div style={{height:'66px'}}>

            </div>
        );
        if (this.state.isAlertShow) {
            AlertShow = (
                <Alert color="success" >
                   Product Added!
                </Alert>
            );
        }


        const item = this.props.items.map(item => (
            <div id='CardItem' className="col-md-4" >
                <Card className='CardHover m-2'>
                    <CardImg src={item.image} className='cursor' onClick={() => this.onSelect(item)} />
                    <CardBody className="text-center">
                        <CardTitle className="h5 cursor" onClick={() => this.onSelect(item)}  >{item.name}</CardTitle>
                        <h5> <span className='text-danger'>${item.price} </span> <small><del className='text-muted'>${item.oldPrice}</del></small> </h5>
                    </CardBody>
                    <CardFooter className=" footer text-center mb-3">
                        <Button
                            className=" button text-white w-75 m-auto"
                            onClick={() => this.addToCart(item)}
                        >Add to Cart </Button>
                    </CardFooter>
                </Card>
            </div>
        ))



        return (
            <div>
                {AlertShow}
                <CardGroup>
                    {item}
                </CardGroup>
                <ItemModal
                    item={this.props.SelectedItem}
                    onModalClick={this.onModalClick}
                    modalOpen={this.state.modalOpen}
                />
            </div>
        );
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);