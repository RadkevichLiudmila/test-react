import React, { Component } from 'react';

import ListItem from '../list-item';
/*
export default class List extends Component {
    
    render() {
       const element = todo 
        return (
           // console.log('zzz')
            <div>
            <div>Раздел </div>
          </div>
        );
    }
};
*/

const List = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ... itemProps } = item;

        return (
            <li key={id}>
                <ListItem {... itemProps} />
            </li>
        )
    })
    return (
        <ul>
            { elements }
        </ul>
    )
}
export default List;