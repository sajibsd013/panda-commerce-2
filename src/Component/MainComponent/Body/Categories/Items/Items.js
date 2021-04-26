import React, { Component } from 'react';
import ItemCard from './Itemcard/ItemCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mapStateToProps = state => {
    return {
        ShoesData: state.ShoesData.slice(0, 3),
        BackpackData: state.BackpackData.slice(0, 3),
        featuredData: state.featuredData.slice(0, 3)
    }
}

class Items extends Component {
    render() {
        return (
            <div>
                 <div className="my-5">
                    <div className="my-1 d-flex justify-content-between">
                        <h3 className='text-muted'>Features</h3>

                        <Link to='/Features'>
                            <h6 className='' style={{ color: '#ff9e04' }}>see all </h6>
                        </Link>
                    </div>

                    <ItemCard
                        items={this.props.featuredData}
                    />
                </div>

                <div className="my-5">
                    <div className="my-1 d-flex justify-content-between">
                        <h3 className='text-muted'>Shoes</h3>

                        <Link to='/shoes'>
                            <h6 className='' style={{ color: '#ff9e04' }}>see all </h6>
                        </Link>
                    </div>
                    <ItemCard
                        items={this.props.ShoesData}
                    />
                </div>

                <div className="my-5">
                    <div className="my-1 d-flex justify-content-between">
                        <h3 className='text-muted'>Backpack</h3>

                        <Link to='/Backpack'>
                            <h6 className='' style={{ color: '#ff9e04' }}>see all </h6>
                        </Link>
                    </div>
                    <ItemCard
                        items={this.props.BackpackData}
                    />
                </div> 

            </div >
        );
    }
};

export default connect(mapStateToProps)(Items);