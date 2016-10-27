var React = require('react');
var ButtonBar = require('../containers/ButtonBar');

var searchResult = React.createClass({
	getInitialState:function(){
		return{
			searchID: ''
		}
	},
	componentDidMount:function(){
	  var query = this.props.location.query;
	  this.setState({
	  	searchID: query.searchID
	  })
	},
	sendMessage:function(){
		FB.ui({
		  method: 'share',
  		  href: "http://ggeazy.herokuapp.com/SearchResult?searchID="+this.state.searchID
		}, function(response){});
	},
	render:function(){
		return(
			<div className = 'container'>
			  <div className = 'page-header'>
			    <h1>Search Results</h1>
			  </div>
				<ButtonBar />
				<h3>You are searching for : {this.state.searchID}</h3>
				<p></p>
				<button type='button' className='btn btn-md btn-info' onClick={this.sendMessage}>
					Share to your friend
				</button>
				<p></p>
				<a href={"https://www.google.com/#q="+this.state.searchID} target="_blank">
					<img className="image" src={require('../pictures/googlelogo.png')} />
				</a>
				<a href={"https://www.youtube.com/results?search_query="+this.state.searchID} target="_blank">
				  <p></p>
					<img className="image" src={require('../pictures/YouTube-logo-full_color.png')} />
				</a>
				<a href={"https://www.facebook.com/search/top/?q="+this.state.searchID} target="_blank">
				  <p></p>
					<img className="image" src={require('../pictures/facebook_logo.png')} />
				</a>
				<a href={"https://twitter.com/search?q="+this.state.searchID} target="_blank">
				  <p></p>
					<img className="image" src={require('../pictures/twitter_logo.png')} />
				</a>
				<a href={"http://www.baidu.com/s?wd="+this.state.searchID} target="_blank">
					<p></p>
					<img className="image" src={require('../pictures/baidu_logo.png')} />
				</a>
				<a href={"http://www.douyu.com/search/"+this.state.searchID} target="_blank">
					<p></p>
					<img className="image" src={require('../pictures/douyu_logo.png')} />
				</a>

			</div>
		)
	}
});

module.exports = searchResult;