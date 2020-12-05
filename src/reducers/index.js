import * as redux from 'redux'
import {rentalsReducer} from './rentals-reducer'

export const init = ()=>{

    const reducer = redux.combineReducers({
        rentals:rentalsReducer
    })
    const store = redux.createStore(reducer);

    return store;
}