var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;


ReactDOM.render(routes, document.getElementById('app'));