import React , {useState , useEffect} from 'react'
import { connect, useSelector } from 'react-redux'
import RentalCardHooks from './RentalCardHooks'
const RentalListHooks = () => {
//const [rentals, setRentals] = useState([]);

//  const state = useSelector(state => state.state)
//  const useEffect(() => {
//      console.log('mouneted')
//      return () => {
//        console.log('i m leaving')
//      }
//  }, [rental])

 // useSelecor , useDispatch  => redux 

// useEffect(() => {
  //  setRentals(
        
   // )
  //  return () => {
  //      console.log('i m leaving')
 //   }
//}, [])

//const addRental = () => {
 //setRentals(oldState => [...oldState , 1]);
//}

const rentals = useSelector(state => state.rentals)
return (
    <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>
                   {rentals.map((rental,index) => {
                       return  <RentalCardHooks key={index} rental={rental} />
                   })}
                </div>
   </section>
)
}


export default RentalListHooks;