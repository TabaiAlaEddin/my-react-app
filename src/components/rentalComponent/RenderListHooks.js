import React , {useState , useEffect} from 'react'
import RentalCardHooks from './RentalCardHooks'
const RentalListHooks = () => {
const [rental, setRental] = useState([]);
//  const state = useSelector(state => state.state)
//  const useEffect(() => {
//      console.log('mouneted')
//      return () => {
//        console.log('i m leaving')
//      }
//  }, [rental])

 // useSelecor , useDispatch  => redux 

 useEffect(() => {
    setRental([1,2,3])
    return () => {
        console.log('i m leaving')
    }
}, [])

const addRental = () => {
 setRental(oldState => [...oldState , 1]);
}
return (
    <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>
                   {rental.map((rental,index) => {
                       return  <RentalCardHooks key={index} city="Tunisia" />
                   })}
                </div>
                <button onClick={addRental}>Add New Rental</button>
   </section>
)
}


export default RentalListHooks ;