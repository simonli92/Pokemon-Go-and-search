var React = require('react');
var ButtonBar = require('../containers/ButtonBar');

var about = React.createClass({
	render:function(){
		return(
			<div className = 'container'>
			  <div className = 'page-header'>
			    <h1>About</h1>
			  </div>
				<ButtonBar />
				<blockquote>
				  <p>Just type in what you want and you will get the whole world.</p>
				  <footer>From me </footer>
				</blockquote>
			</div>
		)
	}
});
module.exports = about;