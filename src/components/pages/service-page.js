import React, { Component } from 'react';

import RandomUserService from '../../services/service';

export default class ServicePage extends Component {
     
    render() {

        return (
            <div>
                <p>Service</p>
                <RandomUserService />
            </div>
            
        )
    }
};
