import React from 'react';
import {Link} from 'react-router-dom';

export function Header(){

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">MyClone</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to='/rentals' className="nav-link">Rentals</Link>
                </div>
                <div className="navbar-nav ml-auto">
                <form className="form-inline">
                <input className="form-control mr-sm-2 mySearchInput" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <a className="nav-link" href="#">Login</a>
                <a className="nav-link" href="#">Register</a>
                </div>
            </div>
        </nav>
    )

}