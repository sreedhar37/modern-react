import React from 'react';
import ReactDOM from 'react-dom';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function getButtonText() {
  return 'Click on me!';
}

const App = () => {
  return (
    <div>
    <label className="label" for="name">Enter Name:</label>
    <input id="name" type="text"/>
    <button style={{backgroundColor:'blue',color:'white'}}>{getButtonText()}</button>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));