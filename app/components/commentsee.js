var React = require ('react');
var ButtonBar = require('../containers/ButtonBar');
var axios = require('axios');
var styles = {
    background:'transparent',
    color:'#6495ed',
    padding:'0px'
};

var commentsee = React.createClass({
	getInitialState:function(){
		return{
			datas:[],
      datashow:'none',
      commentnotsee: 'block'
		}
	},
	loadCommentsFromServer: function() {
    axios.get('/data/comments.json')
      .then(function(response) {
        this.setState({datas: response.data});
      }.bind(this))
      .catch(function(error){
        console.log(error);
      }.bind(this));
  },
  componentWillMount: function() {
    this.loadCommentsFromServer();
    if(typeof FB != 'undefined'){
      FB.api('/me', function(response) {
        if (response.id==='306775899663253') {
          this.setState({datashow:'block'});
          this.setState({commentnotsee:'none'});
        }
      }.bind(this));
    };
  },
	render:function(){
    var commentNodes = this.state.datas.map(function(comment) {
      return (
        <div key={comment.id}>
          <h3>{comment.author}</h3>
          <h4>{comment.texts}</h4>
        </div>
      );
    });
		return(
			<div className = 'container'>
			  <div className = 'page-header'>
			    <h1>See the comment</h1>
			  </div>
				<ButtonBar />
        <div style={{display:this.state.commentnotsee}}>
          <p>You are not allowed to see the comment.</p>
        </div>
        <div style={{display:this.state.datashow}}>
          <p>You can see the comment:</p>
  				<div className="jumbotron col-sm-12" style={styles}>
            {commentNodes}
          </div>
        </div>
			</div>
		)
	}
});

module.exports = commentsee;