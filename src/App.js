import logo from './logo.svg';
import React , {useState , useEffect} from 'react'
import './App.css';
import {Header} from './shared/header'
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import RentalListHooks from './components/rentalComponent/RentalListHooks';
import RentalDetails from './components/rentalComponent/RentalDetails';
import * as redux from 'redux';
import {Provider} from 'react-redux';
import { store } from './reducers';

function App() {
    
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <div className='container'>
                        <Route exact path='/' render={()=>{ return <Redirect to='/rentals'/>}}/>
                        <Route exact path="/rentals" component={RentalListHooks} />
                        <Route exact path="/rentals/:id" component={RentalDetails} /> 
                    </div> 
                </div>
            </BrowserRouter>
        </Provider>

            );
                }

export default App;
