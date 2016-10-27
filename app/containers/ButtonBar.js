var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

function ButtonBar(props){
	return(
		<div>			
		  <IndexLink to = '/'>
				<button type = 'button' className= 'btn btn-link'>Home</button>
			</IndexLink>
		  <Link to = '/about'>
		    <button type = 'button' className = 'btn btn-link'> About</button>
		  </Link>
		  <Link to = '/contact'>
				<button type = 'button' className = 'btn btn-link'> Contact</button>
		  </Link>
		  <Link to = '/pokemonGO'>
				<button type = 'button' className = 'btn btn-link'> Pokemon GO!</button>
		  </Link>
		  <Link to = '/comment'>
				<button type = 'button' className = 'btn btn-link'> Comment</button>
		  </Link>
		  <Link to = '/commentsee'>
				<button type = 'button' className = 'btn btn-link'> Comment See</button>
		  </Link>
		</div>
   )
};

module.exports = ButtonBar;