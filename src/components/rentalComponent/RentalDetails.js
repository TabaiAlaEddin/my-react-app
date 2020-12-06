import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchRentalbYId } from '../../actions';

const RentalDetails = ()=>{

    const {id}=useParams();

    const rental = useSelector(state => state.rental.data);
    const dispatch = useDispatch();
        useEffect(() => {
            dispatch(fetchRentalbYId(id))
        }, [dispatch,id])

    console.log(rental)
    console.log(id)
 
    return(
<>
    <h1>ID {rental && rental.id}</h1>
    <h1>title: {rental && rental.title}</h1>
    <h1>city: {rental && rental.city}</h1>
    <Link to="/rentals">
        <button>Back to list</button>
    </Link>

</>
    )

}
export default RentalDetails ;