import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return{
        CategoriesData: state.CategoriesData
    }
}

class Categories extends Component {
    state = {
        Product: this.props.CategoriesData
    }
    

render() {

    const CategoriesItem = this.state.Product.map(data => (
        <div className="p-3 col-md-4">
            <div style={data.background} className="px-3 py-2 d-flex justify-content-between align-items-center rounded">
                <h1 className="text-white">{data.name}</h1>
                <div>
                    <img src={data.image} alt={data.name} style={{ width: "100px" }} />
                </div>
            </div>

        </div>
    ))

    return (
        <div id="Categories" className="py-5">
            <div className="row">
                {CategoriesItem}
            </div>
        </div>
    );
}
}

export default connect(mapStateToProps)(Categories);