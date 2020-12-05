import React from 'react';
import { useParams } from 'react-router-dom';


const RentalDetails = ()=>{

    const {id}=useParams();
    console.log(id);
    return(

    <h1>RentalDetails Component {id}</h1>

    )

}
export default RentalDetails ;