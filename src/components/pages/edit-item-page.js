import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class AddItemPage extends Component { 
    
    render() {
        
        return (
           
            <form >
                <Link to="/list">
                    <Button variant="contained" color="primary" >Back</Button>
                </Link>
                <Link to="/add">
                    <Button variant="contained" color="primary" type="submit" >Save</Button>
                </Link>
                
            <div >
              <label>
                <input type="radio" value="type1"  />
                Руководитель
              </label>
            </div>
            <div >
              <label>
                <input type="radio" value="type2"  />
                Сотрудник
              </label>
            </div>
            <label>
                <input type="input" />
                ФИО
              </label>
              <label>
                <input type="input" />
                Заработная плата
              </label>

          </form>
        )
    }
};