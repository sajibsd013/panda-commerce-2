import React, { Component } from 'react';
import ItemCard from './ItemCard';
import ItemDetail from './ItemDetail';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';



class Items extends Component {
    state = {
        item: this.props.Product,
        itemDetail: null,
        modalOpen: false
    }
    render() {

        const onSelect = (data) => {
            this.setState({
                itemDetail: data,
                modalOpen: !this.state.modalOpen
            })
        }

        const onModalClick = ()=>{
            this.setState({
                modalOpen: !this.state.modalOpen
            })
        }

        return (
            <div>
                {
                    this.state.item.map(data => (
                        <div>
                            <h2 className="pt-5">{data.name}</h2>
                            <div className="py-2">
                                <ItemCard onSelect={onSelect} data={data} />
                            </div>
                        </div>
                    ))
                }

                <Modal isOpen={this.state.modalOpen}>
                    <ModalBody>
                        <ItemDetail item={this.state.itemDetail} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onModalClick} >Close</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
};

export default Items;