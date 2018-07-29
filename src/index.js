import './main.scss';
import Component from './app' 
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
    <Component />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));