import React from 'react';
import ReactDOM from 'react-dom';

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
