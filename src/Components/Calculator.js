import React, { Component } from 'react';

const math = require('mathjs')


class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            screen: ''
        }        
    }

    onClick = name => {

        if (name === "result") {
            this.setState({
                screen: math.eval(this.state.screen)
            })
        }
        else if (name === "backspace"){
            this.setState({
                screen: this.state.screen.slice(0, -1)
            })
    
        }
        else if (name === "delete") {
            this.setState({
                screen: ''
            })
        }

        else {
            this.setState({
                screen: this.state.screen + name
            })
        }
    }

    keyHandler = (event) => {
        if(event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "0" || event.key === '.' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/'){
        this.setState({
            screen: this.state.screen + event.key
        })
        }
        else if(event.key === 'Backspace'){
            this.setState({
                screen: this.state.screen.slice(0, -1)
            })
        }
        else if(event.key === 'Enter'){
            this.setState({
                screen: math.eval(this.state.screen)
            })
        }
        
      }

    componentDidMount (){
        document.addEventListener("keydown", this.keyHandler, false);
      }
    
      componentWillUnmount(){
        document.removeEventListener("keydown", this.keyHandler, false);
    }

    render() {
        return (
        <div className="calculator">
            <div className="screen">
                <p>{this.state.screen}</p>
            </div>
            <div className="keypad">
                <button name="delete" onClick={e => this.onClick(e.target.name)}>CE</button>

                <button name="/" onClick={e => this.onClick(e.target.name)}>÷</button>
                <button name="*" onClick={e => this.onClick(e.target.name)}>x</button>

                <button name="backspace" onClick={e => this.onClick(e.target.name)}>C</button>


                <button name="7" onClick={e => this.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.onClick(e.target.name)}>9</button>
                <button name="+" onClick={e => this.onClick(e.target.name)}>+</button>

                <button name="4" onClick={e => this.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.onClick(e.target.name)}>-</button>

                <button name="1" onClick={e => this.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.onClick(e.target.name)}>3</button>                
                <button name="." onClick={e => this.onClick(e.target.name)}>.</button>



                <button className="big" name="0" onClick={e => this.onClick(e.target.name)}>0</button>
                <button className="big"  name="result" onClick={e => this.onClick(e.target.name)}>=</button>


            </div>
        </div>
        )
    }
}

export default Calculator;