var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require ('../components/Main');
var Home = require('../components/Home');
var about = require('../components/about');
var contact = require('../components/contact');
var searchResult = require('../components/searchResult');
var pokemonGO = require('../components/pokemonGO');
var commentPost = require('../components/comment');
var commentsee = require('../components/commentsee');

var routes = (
	<Router history = {browserHistory}>
	  <Route path = '/' component = {Main}>
	  	<IndexRoute component = {Home} />
	  	<route path = 'about' component = {about} />
	  	<route path = 'contact' component = {contact} />
	  	<route path = 'SearchResult' component = {searchResult} />
	  	<route path = 'pokemonGO' component = {pokemonGO} />
	  	<route path = 'comment' component = {commentPost} />
	  	<route path = 'commentsee' component = {commentsee} />
	  </Route>
	</Router>
);

module.exports = routes;