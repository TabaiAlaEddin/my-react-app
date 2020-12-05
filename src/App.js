import logo from './logo.svg';
import React , {useState , useEffect} from 'react'
import './App.css';
import {Header} from './shared/header'
import {BrowserRouter,Route} from 'react-router-dom';
import RentalListHooks from './components/rentalComponent/RenderListHooks';
import RentalDetails from './components/rentalComponent/RentalDetails';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='container'>
                    <Route exact path="/" component={RentalListHooks} />
                    <Route exact path="/rentalDetails" component={RentalDetails} /> 
                </div> 
            </div>
        </BrowserRouter>

            );
                }

export default App;
