import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

class Header extends Component {
    constructor(){
        super();
        this.state={
            date: Date(Date.now()).toString(),
            // weather: ''
        };
    }

    // componentDidUpdate() {
    //     axios.get('http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=7iBB9ADbRrj5VoJunAVGEs1R7vsEC9o1&q=87112')
    //     .then(response => {
    //         console.log(response.DataSets);
    //         this.setState({weather: response.DataSets.MinuteCast})
    //     })
    //     .catch(error => console.log('fetch error', error))
    // }

    render() {
        return(
            <div>
                <h3>{this.state.date}</h3>
                <h1>Katrina's To-Do List</h1>
                {/* <h3>{this.state.weather}</h3> */}
               
            </div>
        )
    }
}
export default Header;