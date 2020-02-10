import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
    constructor(){
        super();
        this.state={
            date: Date.now(),
            weather: ''
        };
    }

    componentDidUpdate() {
        axios.get('http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=7iBB9ADbRrj5VoJunAVGEs1R7vsEC9o1&q=87112')
        .then(response => {
            console.log(response);
            this.setState({weather: response.DataSets.MinuteCast})
        })
        .catch(error => console.log('fetch error', error))
    }

    render() {
        return(
            <div>
                <h3>{this.state.date}</h3>
                <h2>Katrina's To-Do List</h2>
                <h3>weather here</h3>
                <ul>
                    <li><Link to='/todolist'>List</Link></li>
                    <li><Link to='/todoform'>Form</Link></li>
                    <li><Link to='/todo'>Home</Link></li>
                </ul>
            </div>
        )
    }
}
export default Header;