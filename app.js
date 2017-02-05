import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import OneRepos from './app/components/OneRepos'
import Result from './app/components/Result'
import Main from './app/components/Main'

ReactDOM.render(


        <Router history={hashHistory}>
           <Route path="/" component={Main}>
               <Route path="/results" component={Result} />
               <Route path="/OneRepos" component={OneRepos}/>
           </Route>
        </Router>
    ,
    document.getElementById('root')
);
