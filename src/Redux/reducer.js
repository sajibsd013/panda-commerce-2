import CategoriesData from '../Data/CategoriesData';
import comments from '../Data/comments';
import BackpackData from '../Data/BackpackData';
import sliderData from '../Data/sliderData';
import ShoesData from '../Data/ShoesData';

const initialState = {
    CategoriesData: CategoriesData,
    comments: comments,
    sliderData: sliderData,
    ShoesData: ShoesData,
    BackpackData: BackpackData,
}

export const Reducer = (state = initialState, action) => {

    if(action.type ==="ADD_COMMENT"){

        let comment = action.payload;
        comment.id = comments.length;
        comment.date = new Date().toDateString;
        return{
           ...state,
           comments: state.comments.concat(comment)
        }
    }
    return state;
}
