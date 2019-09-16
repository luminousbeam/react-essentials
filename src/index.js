import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
//
// serviceWorker.unregister();
var style = {
  backgroundColor: 'turquoise',
  color: 'white',
  fontFamily: 'Arial'
}

ReactDOM.render(
  <div style={style}>
    <h1>Hello World!</h1>
    <p>Glad you're here!</p>
  </div>,
  document.getElementById('root')
)
