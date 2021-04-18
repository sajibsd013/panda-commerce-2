import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardFooter, CardDeck, CardText, Button, CardTitle } from 'reactstrap';

const cardStyle = {
    card: {
        borderRadius: "10px",
        border: "none",
        boxShadow: "5px 5px 10px lightgray"
    },
    footer: {
        backgroundColor: "white",
        border: "none",
        paddingBottom: "20px",
        paddingTop: "0px"
    },
    cursor: {
        cursor: 'pointer'
    },
}




class ItemCard extends Component {

    state ={
        ShoesData: this.props.ShoesData
    }

    render() {
        const item = this.state.ShoesData.map(data => (
            <div className="col-md-4 py-2" >
                <Card style={cardStyle.card}>
                    <CardImg src={data.image} style={cardStyle.cursor} onClick={() => this.props.onSelect(data)} />
                    <CardBody className="text-center">
                        <CardTitle className="h5" style={cardStyle.cursor} onClick={() => this.props.onSelect(data)}  >{data.name}</CardTitle>
                        <CardText>{data.description}</CardText>
                        <h6>{data.price}$</h6>
                    </CardBody>
                    <CardFooter style={cardStyle.footer} className="d-flex justify-content-center">
                        <Button style={{ backgroundImage: "linear-gradient(#EB4687,#E91C69)" }} className=" btn text-white ">Buy Now </Button>
                    </CardFooter>
                </Card>
            </div>
        ))


        return (
            <div>
                <CardDeck>
                    {item}
                </CardDeck>

            </div>
        );
    }

};

export default ItemCard;