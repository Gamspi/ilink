import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from "./reducer";

const rootReducer = combineReducers({
    reducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch

