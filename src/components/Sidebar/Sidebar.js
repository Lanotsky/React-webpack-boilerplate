import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.svg';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='sidebar'>
            <div className='App-logo-container'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            
            <ul>
              {
                // dynamically do this
                // [
                //   <li>Route to component</li>,
                //   <li>Route to component</li>,
                //   <li>Route to component</li>,
                // ]
              }
            </ul>
          </div>
        );
    }
}
 
export default Sidebar;