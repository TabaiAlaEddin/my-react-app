import React , {useState , useEffect} from 'react'
import RentalCardHooks from './RentalCardHooks'
const RentalListHooks = () => {
const [rentals, setRentals] = useState([]);
//  const state = useSelector(state => state.state)
//  const useEffect(() => {
//      console.log('mouneted')
//      return () => {
//        console.log('i m leaving')
//      }
//  }, [rental])

 // useSelecor , useDispatch  => redux 

 useEffect(() => {
    setRentals(
        [{
            id: 1,
            title: "Central Apartment",
            city: "New York",
            street: "Times Sqaure",
            category: "apartment",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 3,
            description: "Very nice apartment",
            dailyRate: 34,
            shared: false,
            createdAt: "24/12/2017"
          },
          {
            id: 2,
            title: "Central Apartment 2",
            city: "San Francisco",
            street: "Main street",
            category: "condo",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 2,
            description: "Very nice apartment",
            dailyRate: 12,
            shared: true,
            createdAt: "24/12/2017"
          },
          {
            id: 3,
            title: "Central Apartment 3",
            city: "Bratislava",
            street: "Hlavna",
            category: "condo",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 2,
            description: "Very nice apartment",
            dailyRate: 334,
            shared: true,
            createdAt: "24/12/2017"
          },
          {
            id: 4,
            title: "Central Apartment 4",
            city: "Berlin",
            street: "Haupt strasse",
            category: "house",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 9,
            description: "Very nice apartment",
            dailyRate: 33,
            shared: true,
            createdAt: "24/12/2017"
        }]
    )
    return () => {
        console.log('i m leaving')
    }
}, [])

const addRental = () => {
 setRentals(oldState => [...oldState , 1]);
}
return (
    <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>
                   {rentals.map((rentals,index) => {
                       return  <RentalCardHooks key={index} rental={rentals} />
                   })}
                </div>
                <button onClick={addRental}>Add New Rental</button>
   </section>
)
}


export default RentalListHooks ;