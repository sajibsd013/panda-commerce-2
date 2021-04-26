import React, { Component } from 'react';
import { Button, Alert, Badge } from 'reactstrap';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        AddedItem: state.AddedItem
    }
}

class Ordered extends Component {

    render() {
        const addedItems = this.props.AddedItem.filter((item, index) => this.props.AddedItem.indexOf(item) === index);
        var Count = [];
        for (let x = 0; x < addedItems.length; x++) {
            Count[x] = 0;
        }
        for (let i = 0; i < this.props.AddedItem.length; i++) {
            const itemCode = this.props.AddedItem[i].itemCode;
            for (let x = 0; x < addedItems.length; x++) {
                const itemCodeNew = addedItems[x].itemCode;
                if (itemCodeNew === itemCode) {
                    Count[x]++;
                }
            }
        }


        let OrderItem = null;
        if (addedItems.length !== 0) {

            OrderItem = (
                addedItems.map((item, index) => (

                    <div id='CardItem' className="" >
                        <div >
                            <div className="row align-items-center CardHover p-3" >
                                <div className="col-lg-5">
                                    <img src={item.image} className="d-block w-100" alt="..." />
                                </div>

                                <div className="col-lg-7 ">
                                    <h3>{item.name} </h3>
                                    <p>{item.description} </p>
                                    <h6>Quantity : <Badge color='dark '> {Count[index]}</Badge></h6>
                                    <h4>
                                        <span className='text-danger'>${item.price}</span>
                                        <small><del className='text-muted'> ${item.oldPrice}</del></small>
                                    </h4>
                                    <Button
                                        className="my-2 w-50 button"
                                        onClick={() => this.props.removeItem(item.itemCode)}
                                    >Remove</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            )
        } else {
            OrderItem = (
                <div>
                    <Alert color="info">
                        You Have No selected product!
                    </Alert>
                </div>
            )
        }

        

        return (
            <div>
                <div>
                    {OrderItem}
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps)(Ordered);