import React, { Component } from 'react';
import { Link } from 'react-dom';

class Header extends Component {
    constructor(){
        super();
        this.state={
            date: Date.now()
        };
    }

    render() {
        return(
            <div>
                <h3>{this.state.date}</h3>
                <h2>Katrina's To-Do List</h2>
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