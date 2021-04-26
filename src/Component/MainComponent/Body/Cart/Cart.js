import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardFooter, Button } from 'reactstrap';
import CartBody from './CartBody';

export class Cart extends Component {

    render() {
        return (
            <div className='py-5 m-auto Cart'>
                <Card style={{ maxWidth: '300px' }} className='shadow m-auto'>
                    <CartBody/>
                    <CardFooter className='text-center bg-white pb-3' style={{ border: 'none' }}>
                        <Link to='/OrderReview'>
                            <Button className='w-100 button'>Review Your Order</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default Cart
