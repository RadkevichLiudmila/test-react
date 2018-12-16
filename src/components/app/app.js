import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ListPage, ServicePage } from '../pages';


import ButtonMaterialUI from '../button';
//import RandomuserService from '../../services/service';

//import { SwapiServiceProvider } from '../swapi-service-context';

//import classNames from 'classnames';
//import { withStyles } from '@material-ui/core/styles';


//import { Link } from 'react-router'
//import List from '../list';

import './app.css';
import { Toolbar } from '@material-ui/core';

export default class App extends Component {  
   
    render() {

        return (
            <Router>
            <div>
                
                <Route path="/list" component={ListPage} />
                <Route path="/service" component={ServicePage} />
                <ButtonMaterialUI />
                
            </div>
            </Router>
            
        )
    }
};
