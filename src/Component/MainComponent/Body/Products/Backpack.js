
import React, { Component } from 'react';
import ItemCard from '../Categories/Items/Itemcard/ItemCard';
import { connect } from 'react-redux';
import TopSection from '../../Header/TopSection';


const mapStateToProps = state => {
    return {
        BackpackData: state.BackpackData,
    }
}

class Backpack extends Component {

    render() {
        document.title ="Panda Commerce- Backpack";
 
        return (
            <div className='container'>
                <TopSection/>
                <h3 className='text-muted'>Backpack </h3>
                <ItemCard
                    items={this.props.BackpackData}
                />
            </div>
        )
    }

}

export default connect(mapStateToProps)(Backpack);