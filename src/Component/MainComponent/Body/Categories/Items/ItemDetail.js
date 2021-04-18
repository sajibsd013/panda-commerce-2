import React from 'react';
import { Card, CardImg, CardBody, CardText, Button, CardTitle } from 'reactstrap';
import LoadComment from './LoadComment';


const ItemDetail = (props) => {

    const { name, image, description, price, itemCode } = props.item;

    return (
        <div>
            <div className="row">

                <Card style={{ border: 'none' }}>
                    <CardImg src={image} />
                    <CardBody>
                        <CardTitle className="h4">{name}</CardTitle>
                        <CardText>{description}</CardText>
                        <h4>{price}$</h4>
                        <Button style={{ backgroundImage: "linear-gradient(#EB4687,#E91C69)" }} className=" btn text-white my-3">Buy Now </Button>
                        <CardTitle className="h3 pt-5">Comments</CardTitle>
                        <LoadComment
                            itemCode={itemCode}
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default ItemDetail;