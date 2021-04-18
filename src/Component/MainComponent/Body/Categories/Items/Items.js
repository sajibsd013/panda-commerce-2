import React, { Component } from 'react';
import ItemCard from './ItemCard';
import ItemDetail from './ItemDetail';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';


const mapStateToProps = state => {
    return {
        ShoesData: state.ShoesData,
        BackpackData: state.BackpackData
    }
}


class Items extends Component {
    state = {
        ShoesData: this.props.ShoesData,
        BackpackData: this.props.BackpackData,
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

        const onModalClick = () => {
            this.setState({
                modalOpen: !this.state.modalOpen
            })
        }


        return (

            <div>
                <div className="my-3">
                    <h3 className='text-muted'>Shoes</h3>
                    <ItemCard
                        ShoesData={this.state.ShoesData}
                        onSelect={onSelect}
                    />
                </div>
                <div className="my-3">
                    <h3 className='text-muted'>Backpack</h3>
                    <ItemCard
                        ShoesData={this.state.BackpackData}
                        onSelect={onSelect}
                    />
                </div>

                <Modal isOpen={this.state.modalOpen}>
                    <ModalBody>
                        <ItemDetail
                            item={this.state.itemDetail}
                        />
                        <hr />
                        <CommentForm
                            item={this.state.itemDetail}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onModalClick} >Close</Button>
                    </ModalFooter>
                </Modal>

            </div >
        );
    }
};

export default connect(mapStateToProps)(Items);