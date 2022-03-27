import {IReview} from "../models/IReview";

export interface State {
    isPageNewReview: boolean;
    reviews:Array<IReview>;
    isSuccess:boolean;
    isError:boolean;
}
export enum ActionEnum {
    SET_PAGE_REVIEW = 'SET_PAGE_REVIEW',
    SET_NEW_REVIEW = 'SET_NEW_REVIEW',
    SET_IS_LOADING='SET_IS_LOADING',
    SET_IS_ERROR='SET_IS_ERROR',
    SET_IS_SUCCESS='SET_IS_SUCCESS',
}
export interface setPageReview {
    type: ActionEnum.SET_PAGE_REVIEW
    payload: boolean
}
export interface setNewReview {
    type: ActionEnum.SET_NEW_REVIEW
    payload: IReview
}
export interface setNewReview {
    type: ActionEnum.SET_NEW_REVIEW
    payload: IReview
}
export interface setIsLoadingAction {
    type: ActionEnum.SET_IS_LOADING
    payload: boolean
}
export interface setIsSuccess {
    type: ActionEnum.SET_IS_SUCCESS
    payload: boolean
}
export interface setIsError {
    type: ActionEnum.SET_IS_ERROR
    payload: boolean
}

export type Action =
    setPageReview|
    setNewReview|
    setIsLoadingAction|
    setIsError|
    setIsSuccess

