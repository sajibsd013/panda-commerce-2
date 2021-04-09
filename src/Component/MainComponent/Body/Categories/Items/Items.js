import React, { Component } from 'react';
import ItemCard from './ItemCard';
import ItemDetail from './ItemDetail';


class Items extends Component {
    state = {
        item: this.props.Product,
        itemDetail: null
    }
    render() {

        const onSelect = (data)=>{
            this.setState({
                itemDetail: data
            })
        }

        return (
            <div>
                <ItemDetail item={this.state.itemDetail}/>
                {
                    this.state.item.map(data => (
                        <div>
                            <h2 className="pt-5">{data.name}</h2>
                            <div className="py-2">
                                <ItemCard  onSelect={onSelect} data={data} />
                            </div>
                        </div>
                    ))
                }

            </div>
        );
    }
};

export default Items;