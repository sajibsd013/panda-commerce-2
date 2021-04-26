import React from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import CommentForm from './CommentForm';
import ItemDetail from './ItemDetail';


const ItemModal = (props) => {
    let modal = null;
    if (props.item != null) {
        modal = (
            <div>
                <Modal isOpen={props.modalOpen}>
                    <ModalBody>
                        <h6>Item CODE : {props.item.itemCode} </h6>
                        <ItemDetail
                            item={props.item}
                        />
                        <hr />
                        <CommentForm
                            item={props.item}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color='danger' onClick={props.onModalClick} >Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    } else {
        modal = <div> </div>
    }
    return (
        <div>
            {modal}
        </div>
    );
};

export default ItemModal;