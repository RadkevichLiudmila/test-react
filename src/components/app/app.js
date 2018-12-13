import React, { Component } from 'react';
import List from '../list';
import ButtonMaterialUI from '../button';

//import classNames from 'classnames';
//import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//import { Link } from 'react-router'
//import List from '../list';

import './app.css';
import { Toolbar } from '@material-ui/core';


export default class App extends Component {   
   
    
    render() {
        const todoData = [
            { label: 'Иванов', director: true, id: 1},
            { label: 'Петров', director: false, id: 2},
            { label: 'Сидоров', director: false, id: 3}
        ];

        
       
        return (
            <div>
                <List todos={todoData} />
                
                <ButtonMaterialUI />
                
            </div>
            
        )
    }
};
