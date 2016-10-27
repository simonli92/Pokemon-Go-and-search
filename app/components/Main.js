var React = require ('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCssTransitionGroup');
require('../main.css');

var Main = React.createClass({
	getInitialState:function(){
  	return {
  	  login_status:false
  	}
  },
	componentDidMount: function() {
    window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '142439362844872',
	      cookie     : true,  // enable cookies to allow the server to access
	                        // the session
	      xfbml      : true,  // parse social plugins on this page
	      version    : 'v2.1' // use version 2.1
	    });
	    FB.getLoginStatus(function(response) {
	      this.statusChangeCallback(response);
	    }.bind(this));
	  }.bind(this);
	  (function(d, s, id) {
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) return;
	    js = d.createElement(s); js.id = id;
	    js.src = "//connect.facebook.net/en_US/sdk.js";
	    fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'));
	},
	statusChangeCallback: function(response) {
	  if (response.status === 'connected') {
	    this.setState({login_status:true});
	    FB.api('/me', function(response) {
        alert("Welcome,  "+response.name);
      });
	  } else {
			this.setState({login_status:false})
	  }
	},
	checkLoginState: function() {
	  FB.getLoginStatus(function(response) {
	    this.statusChangeCallback(response);
	  }.bind(this));
	},
	handleClick: function() {
	  FB.login(this.checkLoginState());
	},
	render:function(){
		return(
			<div>
			  <div className='col-sm-2 col-sm-offset-9'>
			    <p></p>
				  <div className="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="true" data-auto-logout-link="true"></div>
				</div>
				<ReactCSSTransitionGroup
			    transitionName='appear'
			    transitionEnterTimeout={500}
			    transitionLeaveTimeout={300}>
			  	  {React.cloneElement(this.props.children,{key:this.props.location.pathname})}
			  </ReactCSSTransitionGroup>
			</div>
		)
	}
});

module.exports = Main;