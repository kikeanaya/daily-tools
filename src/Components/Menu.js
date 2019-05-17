import React from 'react';
import { Link } from 'react-router-dom';
import  logo  from '../Images/logo.png'
 
const Menu = () => {

    return (
        <div className="menu">
            <div>
                <img src={logo} alt="logo"></img>
                <h1>DAILY TOOLS</h1>
            </div>
            <Link to={`/daily-tools/`}><h3>ABOUT</h3></Link>
            <Link to={`/daily-tools/calculator`}><h3>CALCULATOR</h3></Link>
            <Link to={`/daily-tools/chronometer`}><h3>CHRONOMETER</h3></Link>
            <h3>CALENDAR</h3>
        </div>
    )
}

export default Menu