import {useDispatch} from "react-redux";
import {bindActionCreators} from 'redux'
import {ActionCreator} from "../redux/actions_creator";
export const useAction = () => {

    const dispatch = useDispatch()
    return bindActionCreators(ActionCreator, dispatch)
}