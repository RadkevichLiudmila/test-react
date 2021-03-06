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

   /* onToggleDone = (id) => {
        console.log(id);
       /* this.setState((state) => {
          const items = this.toggleProperty(state.items, id, 'done');
          return { items };
        });*/
     // };

    const elements = todos.map((item) => {

        const { id, ... itemProps } = item;

        return (
            <li key={id}>
                <ListItem {... itemProps} />
            </li>
        )
    })
    return (
        <ul >
            { elements }
        </ul>
    )
}
export default List;