import React, { Component } from 'react';

export default class RandomUserService extends Component { 
    constructor() {
        super();
        this.getResource =  () => {
        fetch('https://randomuser.me/api/')
        .then((res) => {
          return res.json();
        })
        .then((body) => {
          const result = body.results;
          console.log('service', result);
          return result;
        })
        
      }
    }
   
    render() {
     // const resultData = this.getResource();
        console.log('123', this.getResource());

        return (
           
            <span > test </span>
            
        )
    }
};
/*
fetch('https://randomuser.me/api/')
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    const result = body.results;
  })
*/
/*
export default class RandomUserService {
  
    _apiBase = 'https://randomuser.me/api/';
  
    getResource = async () => {
      const res = await fetch(`${this._apiBase}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${this._apiBase}` +
          `, received ${res.status}`)
      }

      return await res.json();
    };
 }
*/