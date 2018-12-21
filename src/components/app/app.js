import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ListPage, ServicePage, AddItemPage, EditPage } from '../pages';


import ButtonMaterialUI from '../button';

import './app.css';

export default class App extends Component {  
   
    render() {

        return (
            <Router>
            <div>
                
                <Route path="/list" component={ListPage} />
                <Route path="/add" component={AddItemPage} />
                <Route path="/edit" component={EditPage} />
                <Route path="/service" component={ServicePage} />
                <ButtonMaterialUI />
                
                
            </div>
            </Router>
            
        )
    }
};
