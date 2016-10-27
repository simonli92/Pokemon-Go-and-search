var React = require('react');
var ButtonBar = require('../containers/ButtonBar');
var ContactStyle = require ('../styles/contactstyle');

var contact = React.createClass({
	render:function(){
		return(
			<div className = 'container'>
			  <div className = 'page-header'>
			    <h1>Contact</h1>
			  </div>
				<ButtonBar />
				<ContactStyle>
					<p>Simon Lee</p>
					<p>Meet At Noon Organization</p>
					<p>Branch in SF</p>
				</ContactStyle>
			</div>
		)
	}
});
module.exports = contact;