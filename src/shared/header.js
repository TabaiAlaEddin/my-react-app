import React from 'react';
import '../style/header/_header.scss'

export function Header(){

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">MyClone</a>
            <form class="form-inline">
                <input className="form-control mr-sm-2 mySearchInput" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primery my-2 my-sm-0 mySearchButton" type="submit">Search</button>
                </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <a className="nav-link" href="#">Login</a>
                <a className="nav-link" href="#">Register</a>
                </div>
            </div>
        </nav>
    )

}