import React from 'react';
import { Card, CardImg, CardBody, CardText, Button, CardTitle } from 'reactstrap';
import LoadComment from './LoadComment';


const ItemDetail = (props) => {
    let demo;
    if (props.item) {
        const { name, image, description, price , comments} = props.item;

        demo = (

            <div className="row">
                <div className="col-md-6">
                    <Card style={{border: 'none'}}>
                        <CardImg src={image} />
                        <CardBody>
                            <CardTitle className="h4">{name}</CardTitle>
                            <CardText>{description}</CardText>
                            <h4>{price}$</h4>
                            <Button style={{ backgroundImage: "linear-gradient(#EB4687,#E91C69)" }} className=" btn text-white my-3">Buy Now </Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card style={{border: 'none'}}>
                        <CardBody>
                            <CardTitle className="h4">Comments</CardTitle>
                            <hr/>
                            <LoadComment comments={comments}/>
                        </CardBody>
                    </Card>
                </div>
            </div>

        )
    } else {
        demo = (
            <h1></h1>
        )
    }
    return (
        <div>
            {demo}
        </div>
    );
};

export default ItemDetail;