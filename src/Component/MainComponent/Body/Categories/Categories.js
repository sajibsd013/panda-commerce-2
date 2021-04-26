import React, { Component } from 'react';


const CategoriesData = [
    {
        id: 0,
        image: "assets/images/categories/watch.png",
        name: "Watch",
        background: {
            backgroundImage: "linear-gradient(45deg,#EF962D,#F4C71B)"
        }

        
    },
    {
        id: 1,
        image: "assets/images/categories/bag.png",
        name: "Bag",
        background: {
            backgroundImage: "linear-gradient(45deg,#ED3F84,#ED4589)"
        }

    },
    {
        id: 2,
        image: "assets/images/categories/shoes.png",
        name: "Shoes",
        background: {
            backgroundImage: "linear-gradient(45deg,#4173FF,#3613F7)"
        }

    }

]

class Categories extends Component {
    state = {
        Product: CategoriesData
    }

    CategoriesData = [
        {
            id: 0,
            image: "assets/images/categories/watch.png",
            name: "Watch",
            background: {
                backgroundImage: "linear-gradient(45deg,#EF962D,#F4C71B)"
            }
    
            
        },
        {
            id: 1,
            image: "assets/images/categories/bag.png",
            name: "Bag",
            background: {
                backgroundImage: "linear-gradient(45deg,#ED3F84,#ED4589)"
            }
    
        },
        {
            id: 2,
            image: "assets/images/categories/shoes.png",
            name: "Shoes",
            background: {
                backgroundImage: "linear-gradient(45deg,#4173FF,#3613F7)"
            }
    
        }
    
    ]

    render() {

        const CategoriesItem = this.state.Product.map(data => (
            <div className="p-3 col-md-4 ">
                <div style={data.background} className="px-3 py-2 d-flex justify-content-between align-items-center rounded CardHover cursor">
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

export default Categories;