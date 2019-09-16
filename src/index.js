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
const title = React.createElement(
  'h1',
  {id: 'title', className: 'header', style: style},
  'Hello World'
)

ReactDOM.render(
  title,
  document.getElementById('root')
)
