import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className="menu">
            <Link to={`/`}><h1>DAILY TOOLS</h1></Link>
            <Link to={`/calculator`}><h3>CALCULATOR</h3></Link>
            <Link to={`/chronometer`}><h3>CHRONOMETER</h3></Link>
            <h3>TIMER</h3>
            <h3>CALENDAR</h3>
        </div>
    )
}

export default Menu