var React = require('react');

var styles = {
  	background:'transparent',
  	color:'blue',
  	marginTop: '20px'
};


function ContactStyle(props){
	return(
		<div className="jumbotron col-sm-12 text-center" style={styles}>
	  	{props.children}
		</div>
	)
};

module.exports = ContactStyle;