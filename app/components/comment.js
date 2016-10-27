var React = require ('react');
var ButtonBar = require('../containers/ButtonBar');
var axios = require('axios');
var styles = {
    background:'transparent',
    color:'#6495ed',
    padding:'50px'
};


var commentPost = React.createClass({
	getInitialState:function(){
		return{
			author:'',
			texts:''
		}
	},
	handleAuthorChange:function(e){
		this.setState({
			author:e.target.value
		})
	},
	handleTextChange:function(e){
		this.setState({
			texts:e.target.value
		})
	},
	handleSubmitComment:function(e){
		e.preventDefault();
		var author = this.state.author.trim();
		var texts = this.state.texts.trim();
		if (!texts || !author) {
      return;
    }
		var comment = {author:author, texts:texts};
		comment.id = Date.now();
		axios.post('/comments.jason',comment)
      .then(function(response) {
        this.setState({author:'',texts:''});
        alert('Successfully submit!')
      }.bind(this))
      .catch(function(err) {
        alert('Please type again');
      }.bind(this));
	},
	render:function(){
		return(
			<div className = 'container'>
				  <div className = 'page-header'>
				    <h1>Comment</h1>
				  </div>
					<ButtonBar />
					<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles}>
						<form onSubmit = {this.handleSubmitComment}>
								<input
									className="form-control"
								  placeholder = 'your name'
								  onChange = {this.handleAuthorChange}
								  value = {this.state.author}
								  type = 'text' />
								<textarea 
								 className="form-control" 
								 rows="5"
								 placeholder = 'your comment'
								 onChange = {this.handleTextChange}
								 value = {this.state.texts}></textarea>
								<button
						      className="btn btn-md btn-primary"
						      type="submit">
						        submit
						    </button>
						</form>
					</div>
			</div>
		)
	}
});

module.exports = commentPost;