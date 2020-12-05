import logo from './logo.svg';
import React , {useState , useEffect} from 'react'
import './App.css';
import {Header} from './shared/header'
import RentalListHooks from './components/rentalComponent/RenderListHooks';
import RentalDetails from './components/rentalComponent/RentalDetails';

function App() {

    const [isRentalList , setIsRentalList]= useState(true);

    const changeRoot = ()=>{

        { isRentalList ?setIsRentalList(false) :setIsRentalList(true)};
    }

    return (
        <div className="App">
            <Header/>
            <button onClick={()=>changeRoot()}>change</button>
            <div className='container'>
                { isRentalList ?<RentalListHooks/> :<RentalDetails/>}  
            </div> 
        </div>
            );
                }

export default App;
