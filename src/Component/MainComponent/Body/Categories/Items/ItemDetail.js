import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import LoadComment from './LoadComment';


const ItemDetail = (props) => {

    const { name, image, description, price, oldPrice, itemCode } = props.item;

    return (
        <div>
            <div className="row">

                <Card style={{ border: 'none' }}>
                    <CardImg src={image} />
                    <CardBody >
                        <CardTitle className="h4">{name}</CardTitle>
                        <CardText>{description}</CardText>
                        <h5 >
                            <span className='text-danger'>${price} </span>
                            <small><del className='text-muted'> ${oldPrice}</del></small>
                        </h5>
                        <div className=''>
                            {/* <Button className="my-2 w-50 button">Add to Cart </Button> */}
                        </div>

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