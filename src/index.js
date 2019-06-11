import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

/*
for React Router to work properly, we need to wrap our whole app in a BrowserRouter component.
Also, BrowserRouter wraps the history library which makes it possible for
our app to be made aware of changes in the URL.
*/

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)