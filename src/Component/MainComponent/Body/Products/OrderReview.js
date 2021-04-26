import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'reactstrap/lib/Alert';
import { Card, CardFooter, Button } from 'reactstrap';
import Ordered from './Ordered';
import { REMOVE_ITEM } from '../../../../Redux/ActionTypes';
import CartBody from '../Cart/CartBody';

const mapDispatchToProps = dispatch => {
    return {
        deletItem: (itemCode, type) => dispatch({
            type: type,
            itemCode: itemCode
        })
    }
}
class OrderReview extends Component {
    state= {
        isAlertShow: false
    }
    removeItem = itemCode => {
        this.props.deletItem(itemCode, REMOVE_ITEM);
        this.setState({
            isAlertShow: !this.state.isAlertShow
        })
        setTimeout(() => {
            this.setState({
                isAlertShow: !this.state.isAlertShow
            })
        }, 600)
    }

    render() {
        document.title ="Panda Commerce- Cart";
        
        let AlertShow = (
            <div style={{ height: '66px' }}>

            </div>
        );
        if (this.state.isAlertShow) {
            AlertShow = (
                <Alert color="warning" >
                    Product Removed!
                </Alert>
            );
        }

        return (
            <section className='container py-5 '>
                <h3 className='text-muted'>Order Review </h3>
                <div id='OrderReview' className="row">
                    <div className="col-md-8">
                    {AlertShow}
                        <Ordered
                            removeItem={this.removeItem}
                        />
                    </div>
                    <div className="col-md-4 pb-5 ">
                        <Card style={{ maxWidth: '300px' }} className='shadow m-auto '>
                            <CartBody />
                            <CardFooter className='text-center bg-white pb-3' style={{ border: 'none' }}>
                                <Button to='/OrderReview' className='w-100 button'>Confirm Order</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(null, mapDispatchToProps)(OrderReview);