import React, { Component } from 'react';
import { CardBody, CardHeader,Badge } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        AddedItem: state.AddedItem
    }
}

export class CartBody extends Component {

    render() {
        const ItemOrdered = this.props.AddedItem.length;
        let itemPrice = 0;
        let Shipping = 0;
        let TotalBefareTax = 0;
        let Tax = 0;
        let ORderTotal = 0;

        if (this.props.AddedItem.length !== 0) {
            itemPrice = this.props.AddedItem.reduce((total,product) => total+ Number(product.price),0);
           
            if(itemPrice<50){
                Shipping = 8.99;
            }else{
                Shipping = 5.99;
            }

            TotalBefareTax = itemPrice+Shipping;
            Tax = TotalBefareTax* 0.12;
            ORderTotal= Tax+ TotalBefareTax;
        }


        return (
            <div className=''>
                <CardHeader className='text-center bg-white'>
                    <h5>Order Summary</h5>
                </CardHeader>
                <CardBody className='cart-body'>
                    <h6 className='text-center pb-2'>Item Ordered : <Badge color='info '> {ItemOrdered} </Badge></h6>
                    <div className='d-flex justify-content-between'>
                        <p>Product Price :</p>
                        <p >${itemPrice.toFixed(2)}</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <p>Shipping cost :</p>
                        <p >${Shipping.toFixed(2)}</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <p>Total Befare Tax  :</p>
                        <p >${TotalBefareTax.toFixed(2)}</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <p>Tax + VAT cost :</p>
                        <p >${Tax.toFixed(2)}</p>
                    </div>

                    <div className='d-flex text-danger  justify-content-between'>
                        <h5 className='font-weight-bold'>Total Price :</h5>
                        <h5 className='font-weight-bold'>${ORderTotal.toFixed(2)}</h5>
                    </div>
                </CardBody>

            </div>
        )
    }
}

export default connect(mapStateToProps)(CartBody);
