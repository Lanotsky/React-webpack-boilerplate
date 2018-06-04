import './main.scss';
import Component from './app' 
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
    <Component />
      <p>React here!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));