import React from 'react';
//import ReactDom from 'react-dom';
import {render} from 'react-dom'
import App from './App.js'


/*
ReactDom.render(
    <App></App>,
    document.querySelector('#root')
)
*/

render(
    <div>
        <App></App>
    </div>,
    document.querySelector('#root')
)
