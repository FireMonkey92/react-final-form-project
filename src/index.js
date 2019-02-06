import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Header from './components/header';
import Login from './components/login';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path='/' component={App}></Route>
            <Route path='/login' component={Login} />
            
        </div>
    </BrowserRouter>

    , document.getElementById('root'));
