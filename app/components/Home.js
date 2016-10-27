var React = require('react');
var ButtonBar = require('../containers/ButtonBar');
var Homestyle = require('../styles/Homestyle');

var Home = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return{
			searchID:''
		}
	},
	handleUpdateID: function(e){
		this.setState({
			searchID: e.target.value
		})
	},
	handleSubmitID:function(e){
		e.preventDefault();
		this.context.router.push({
			pathname:'/SearchResult',
			query:{
				searchID:this.state.searchID
			}
		})
	},
	render:function(){
		return(
			<div className = 'container'>
			  <div className = 'page-header'>
			    <h1>Home</h1>
			  </div>
				<ButtonBar />
				<Homestyle 
				 SubmitID={this.handleSubmitID}
				 UpdateID={this.handleUpdateID}
				 searchID={this.state.searchID} />
				<div
				  className="fb-like"
				  data-share="true"
				  data-width="450"
				  data-show-faces="true">
				</div>
			</div>
		)
	}
});

module.exports = Home;