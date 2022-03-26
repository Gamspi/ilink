import {useDispatch} from "react-redux";
import {bindActionCreators} from 'redux'
import {allActionsCreators} from "../redux/reducer/actions_creators";

export const useAction = () => {
    /**
     * создаем диспатч
     *
     */
    const dispatch = useDispatch()
    return bindActionCreators(allActionsCreators, dispatch)
}