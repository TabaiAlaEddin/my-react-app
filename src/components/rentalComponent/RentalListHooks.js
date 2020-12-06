import React , {useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RentalCardHooks from './RentalCardHooks'
import { fetchRentals } from '../../actions'
import * as actions from '../../actions'
const RentalListHooks = () => {

const rentals = useSelector(state => state.rentals.data);
const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchRentals())
}, [dispatch])


console.log(rentals)

return (
    <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                {rentals &&  
                <div className='row'>
                   {rentals.map((rental,index) => {
                       return  <RentalCardHooks key={index} rental={rental} />
                   })}
                </div>}
               
   </section>
)
}


export default RentalListHooks;