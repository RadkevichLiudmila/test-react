import React, { Component } from 'react';
import List from '../list';
//import { Link } from 'react-router'
//import List from '../list';

import './app.css';


export default class App extends Component {
    
    render() {
        return (
            <div>
                <List />
               <button type="button" 
                        className=""
                       /* onClick={() => onFilterChange(name)}*/>
                        List
                </button> 
                <button type="button" 
                        className=""
                       /* onClick={() => onFilterChange(name)}*/>
                        Service
                </button> 
            </div>
            
        )
    }
};
