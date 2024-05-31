import React from "react";
import { Component } from "react";

export default class Extends extends Component {
    render(){
        const {type, name} = this.props;
        return (
            <div>
                <h1> {type} {name}!</h1>
                <hr/>
                <input type="text" placeholder="Type.." value={type}/>
                <input type="text" placeholder="Name.." value={name}/>
            </div>
        )
    }
}