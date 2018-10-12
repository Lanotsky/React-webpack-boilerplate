import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { style } from "./app-style";
import Sidebar from './components/Sidebar/Sidebar'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div style={style.main}>
         <Sidebar/>
      </div>
    );
  }
}
 
export default Main;

Main.propTypes = {
  
}