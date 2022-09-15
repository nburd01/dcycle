
import React, { Component } from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
        data: [
            {
            name: "anil" ,
                details: [
                    {info: "888"},
                    {info: "et oui"},
                    {info: "abc"}
                ]       
            },
            {
            name: "niall" ,
                details: [
                    {info: "888"},
                    {info: "et oui"},
                    {info: "abc"}
                ]       
            },
            {
            name: "big ben" ,
                details: [
                    {info: "888"},
                    {info: "et oui"},
                    {info: "abc"}
                ]      
            },
            {
            name: "tgs" ,
                details: [
                    {info: "888"},
                    {info: "et oui"},
                    {info: "abc"}
                ]       
            },
        ]
    }
  }
  handleEvent(){
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        {
            this.state.data.map((item) =>
            <div>{item.name}
            <ul>
                {item.details.map((sub) => 
                <li>
                    {sub.info}
                </li>
                )}
            </ul>
            </div>
            )
        }
      </div>
    );
  }
}