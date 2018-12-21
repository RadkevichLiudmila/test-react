import React, { Component } from 'react';
import List from '../list';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default class ListPage extends Component {  
    render() {
        const todoData = [
            { label: 'Иванов', director: true, id: 1},
            { label: 'Петров', director: false, id: 2},
            { label: 'Сидоров', director: false, id: 3}
        ];

        return (
                
            <div>
                <Link to="/add">
                    <Button variant="contained" color="primary" >Add</Button>
                </Link>
                <List todos={todoData} />
            </div>
            
        )
    }
};
