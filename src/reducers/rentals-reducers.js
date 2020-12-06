import {FETCH_RENTALS,FETCH_RENTAL_ID} from '../actions/types'
const INISIAL_STATE = {
    rentals:[],
    rental:{}
}
export const rentalsReducer = (state=INISIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_RENTALS:
            return {...state, data:action.rentals} 
        default:
            return state;
    }
}
export const rentalByIdReducer = (state=INISIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_RENTAL_ID:
            return {...state, data:action.rental}    
        default:
            return state;
    }
}