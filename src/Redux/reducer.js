import comments from '../Data/comments';
import BackpackData from '../Data/BackpackData';
import ShoesData from '../Data/ShoesData';
import { combineReducers } from 'redux';
import { ADD_COMMENT, ADD_ITEM, REMOVE_ITEM, SELECT_ITEM } from './ActionTypes';


const SelectedItemReducer = (SelectedItemState = null, action) => {

    switch (action.type) {
        case SELECT_ITEM:
            return action.item;
        default:
            return SelectedItemState;

    }
}


const AddItemReducer = (AddItemState = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...AddItemState, action.item];
        case REMOVE_ITEM:
            const remainItem = AddItemState.filter(item => item.itemCode !== action.itemCode)
            return remainItem
        default:
            return AddItemState;
    }

}

const commentReducer = (commentState = comments, action) => {

    switch (action.type) {
        case ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date();
            return commentState.concat(comment)
        default:
            return commentState;

    }

}
const featuredDataReducer = (featuredDatatState, action) => {
    const newShoesItem = ShoesData.filter(item => {
        return item.featured === true
    })
    const newBagItem = BackpackData.filter(item => {
        return item.featured === true
    })
    return [...newShoesItem, ...newBagItem];

}
const ShoesDataReducer = (ShoesDataState = ShoesData, action) => {
    return ShoesDataState;

}
const BackpackDataReducer = (BackpackDataState = BackpackData, action) => {
    return BackpackDataState;

}

export const Reducer = combineReducers({
    comments: commentReducer,
    featuredData: featuredDataReducer,
    ShoesData: ShoesDataReducer,
    BackpackData: BackpackDataReducer,
    AddedItem: AddItemReducer,
    SelectedItem: SelectedItemReducer
})

