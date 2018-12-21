import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ListItem extends Component { 
    constructor() {
        super();
        this.onLabelClick = () => {
            console.log(`name: ${this.props.label}`);
            <Link to="/edit"></Link>
        }
    }
    
    render() {
        const  { label, director = false } = this.props;
        
        return (
            <Link to="/edit">
            <span onClick={ this.onLabelClick }>{ label }</span>
            </Link>
        )
    }
};