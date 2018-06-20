//react is the view library
import React from 'react';//React has webpack that does the bundling so thats why it works
import ReactDOM from 'react-dom';//Use the for the dom of the website. You can import for specific uses
import './index.css';//This allow us to import css for each component
//import Hello from './Hello.js';//If there no type it assume it is js file
import registerServiceWorker from './registerServiceWorker';//Allows features run faster
import 'tachyons';
import App from './containers/App';

ReactDOM.render( <App />, 
document.getElementById('root'));//Grabing element by id root
registerServiceWorker();
