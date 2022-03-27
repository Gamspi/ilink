import {ActionEnum, Action, State} from "./types";
import {reviews} from "../constants/reviews";

const initialState: State = {
    isPageNewReview: false,
    reviews: reviews,
    isSuccess:false,
    isError:false,
}
const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case ActionEnum.SET_PAGE_REVIEW:
            return {...state, isPageNewReview: action.payload}
        case ActionEnum.SET_IS_SUCCESS:
            return {...state, isSuccess: action.payload}
        case ActionEnum.SET_IS_ERROR:
            return {...state, isError: action.payload}

        case ActionEnum.SET_NEW_REVIEW:
            return {...state, reviews: [ ...state.reviews, action.payload]}
        default:
            return state
    }
}
export default reducer