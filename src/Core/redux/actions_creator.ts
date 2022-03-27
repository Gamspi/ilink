import {ActionEnum, setIsError, setIsLoadingAction, setIsSuccess, setNewReview, setPageReview} from "./types";
import {IReview} from "../models/IReview";
import {appDispatch} from "./store";
import axios from "axios";

export const ActionCreator = {
    setIsPageNewReview: (isPage: boolean): setPageReview => ({type: ActionEnum.SET_PAGE_REVIEW, payload: isPage}),
    setNewReview: (review: IReview): setNewReview => ({type: ActionEnum.SET_NEW_REVIEW, payload: review}),
    setIsSuccess: (is:boolean): setIsSuccess => ({type: ActionEnum.SET_IS_SUCCESS, payload: is}),
    setIsError: (is:boolean): setIsError => ({type: ActionEnum.SET_IS_ERROR, payload: is}),
    setIsLoading: (isLoading: boolean): setIsLoadingAction => ({
        type: ActionEnum.SET_IS_LOADING, payload: isLoading
    }),
    postReview: (review: IReview) => async (dispatch: appDispatch) => {
        try {
            await axios.post<IReview>('https://jsonplaceholder.typicode.com/posts', {review})
            dispatch(ActionCreator.setNewReview(review))
            dispatch(ActionCreator.setIsSuccess(true))
            setTimeout(()=>{
                    dispatch(ActionCreator.setIsSuccess(false))
                },
                3000
            )
        } catch (e) {
            dispatch(ActionCreator.setIsError(true))
            setTimeout(()=>{
                    dispatch(ActionCreator.setIsError(false))
                },
                3000
            )
        }

    }
}