
import React, { Component } from 'react';
import ItemCard from '../Categories/Items/Itemcard/ItemCard';
import { connect } from 'react-redux';
import TopSection from '../../Header/TopSection';


const mapStateToProps = state => {
    return {
        featuredData: state.featuredData,
    }
}

class Features extends Component {

    render() {
        document.title ="Panda Commerce- Features";

        return (
            <div className='container py-5'>
                <TopSection />
                <h3 className='text-muted'>Features </h3>
                <ItemCard
                    items={this.props.featuredData}
                />
            </div>
        )
    }

}

export default connect(mapStateToProps)(Features);