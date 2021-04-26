import React, { Component } from 'react';
import ItemCard from '../Categories/Items/Itemcard/ItemCard';
import { connect } from 'react-redux';
import TopSection from '../../Header/TopSection';


const mapStateToProps = state => {
    return {
        ShoesData: state.ShoesData
    }
}

class Shoes extends Component {

    render() {
        document.title = "Panda Commerce- Shoes";
        return (
            <div className='container '>
                <TopSection />
                <h3 className='text-muted '>Shoes</h3>
                <ItemCard
                    items={this.props.ShoesData}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Shoes);