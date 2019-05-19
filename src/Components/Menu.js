import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  logo  from '../Images/logo.svg'
 
class Menu extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            selected: 0
        }        
    }

    onClick = target => {
        if(target.className === 'about-logo'){
            this.setState({
                selected: 0
            })
        } else if(target.className === 'calculator-logo'){
            this.setState({
                selected: 1
            })
        } else if(target.className === 'chronometer-logo'){
            this.setState({
                selected: 2
            })
        }
    }

    render(){
        return (
            <div className="menu">
                <div>
                    <img src={logo} alt="logo"></img>
                    <h1>DAILY TOOLS</h1>
                </div>
                <Link to={`/daily-tools/`}  className={(this.state.selected!==0) ? "" : "touched"}><h3 onClick={e => this.onClick(e.target)} className={(this.state.selected!==0) ? "about-logo" : "about-logo selected"}>ABOUT</h3></Link>
                <Link to={`/daily-tools/calculator`}  className={(this.state.selected!==1) ? "" : "touched"}><h3 onClick={e => this.onClick(e.target)} className={(this.state.selected!==1) ? "calculator-logo" : "calculator-logo selected"}>CALCULATOR</h3></Link>
                <Link to={`/daily-tools/chronometer`} className={(this.state.selected!==2) ? "" : "touched"}><h3 onClick={e => this.onClick(e.target)} className={(this.state.selected!==2) ? "chronometer-logo" : "chronometer-logo selected"}>CHRONOMETER</h3></Link>
                <h3 className="calendar-logo">CALENDAR</h3>
            </div>
        )
    }
}

export default Menu