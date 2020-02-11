import React, { Component, render } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
    constructor(){
        super();
        this.state={
            date: Date(Date.now()),
            weather: ''
        };
    }

    //"Key": "37146_PC", "ParentCity": {
    //"Key": "349680",

    componentDidMount() {
        axios.get('http://dataservice.accuweather.com//currentconditions/v1/37146_PC?apikey=7iBB9ADbRrj5VoJunAVGEs1R7vsEC9o1')
        .then(response => {
            console.log('call res', response.data);
            const current = response.data.map(forecast => { 
                 return( <div>
                    <span>{forecast.WeatherText}</span>
                    <span>  {forecast.Temperature.Imperial.Value}</span>
                    <span>  {forecast.Temperature.Imperial.Unit}</span>
                </div>)
            })
            this.setState({weather: current});
        })
            
        .catch(error => console.log('fetch error', error))
    }

    render() {
        return(
            <div>
                <h4>As of: {this.state.date}</h4>
                <h3>Current Weather in Albuquerque:  {this.state.weather}</h3>
                <h1>Katrina's To-Do List</h1>
                
               
            </div>
        )
    }
}
export default Header;