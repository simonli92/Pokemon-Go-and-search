var React = require('react');

var styles = {
  transparentBg:{
  	background:'transparent'
  }
};

function HomeStyle(props){
	return(
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
	  	<div className="col-sm-12">
	  		<form onSubmit={props.SubmitID}>
			    <div className="form-group">
			      <input
			        className="form-control"
			        placeholder="type in what you want to know"
			        onChange={props.UpdateID}
			        value={props.searchID}
			        type="text" />
			    </div>
			    <div className="form-group col-sm-4 col-sm-offset-4">
			      <button
			        className="btn btn-block btn-success"
			        type="submit">
			          Search
			      </button>
			    </div>
			  </form>
	  	</div>
		</div>
	)
};

module.exports = HomeStyle;