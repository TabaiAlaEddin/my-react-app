import {FETCH_RENTALS,FETCH_RENTAL_ID,GET_RENTAL_ERROR} from './types'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export const fetchRentals = ()=>{

  return async (dispatch) => {
    try {
        const result = await axios.get('http://localhost:3001/api/v1/rentals/');
        dispatch({type: FETCH_RENTALS, rentals: result.data})
        console.log(result.data)
    } catch (error) {
        dispatch({type: GET_RENTAL_ERROR, error})
    }
}

}

export const fetchRentalbYId = (id) =>{


  return async (dispatch) => {
    try {
        const result = await axios.get(`http://localhost:3001/api/v1/rentals/${id}`);
        dispatch({type: FETCH_RENTAL_ID , rental: result.data})
        console.log(result.data)
    } catch (error) {
        dispatch({type: GET_RENTAL_ERROR, error})
    }
}

}