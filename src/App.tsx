import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



export default class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      count: 6
    }
  }

  isEven = (val: number) => {
    return val % 2 === 0 ? "Even" : "Odd";
  }

  getClassName = (val: number) => {
    let bgColor = val % 2 === 0 ? "bg-primary" : "bg-secondary"
    return bgColor + " text-white text center p-2 m-1"
  }

  render = () =>
    <h4 className={this.getClassName(this.state.count)}>Number of things: {this.isEven(this.state.count)}</h4>
}
