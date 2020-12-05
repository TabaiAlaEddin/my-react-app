import React from 'react';
import { RentalCard } from './RentalCard';

export class RentalList extends React.Component{

    constructor(){

        super();
        this.state ={
            rentals:[1,2,3]
        } 
    }

    renderRentals(){

      return this.state.rentals.map((rental)=> {
            return(
                <RentalCard city="Tunis" />
            )
        })
    }

    addRental(){

        debugger;
        const rentalsL = this.state.rentals;
        rentalsL.push(1);
        this.setState({
            rentalsL
        })
    }

    render(){
        return(
            <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>
                   {this.renderRentals()}
                </div>
                <button onClick={()=> this.addRental}>Add New Rental</button>
            </section>
        )
  
    }

}