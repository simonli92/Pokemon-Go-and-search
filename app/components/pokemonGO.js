var React = require ('react');
var ButtonBar = require('../containers/ButtonBar');

var pokemonGO = React.createClass({
	sendMessageRed:function(){
		FB.ui({
		  method: 'feed',
  		link:'http://ggeazy.herokuapp.com/pokemonGO',
  		caption:'Join the red team with me!',
  		picture:'https://s32.postimg.org/ppckhjfgl/Team_Red.png'
		}, function(response){});
	},
	sendMessageBlue:function(){
		FB.ui({
		  method: 'feed',
  		link:'http://ggeazy.herokuapp.com/pokemonGO',
  		caption:'Join the blue team with me!',
  		picture:'https://s32.postimg.org/5ei7yramd/Team_Blue.png'
		}, function(response){});
	},
	sendMessageYellow:function(){
		FB.ui({
		  method: 'feed',
  		link:'http://ggeazy.herokuapp.com/pokemonGO',
  		caption:'Join the yellow team with me!',
  		picture:'https://s32.postimg.org/bwy5lwop1/Team_Yellow.png'
		}, function(response){});
	},
	render:function(){
		return(
			<div className = 'container'>
			  <div className = 'page-header'>
			    <h1>Pokemon GO!</h1>
			  </div>
				<ButtonBar />
				<div className='text-center'>
					<p>
						<a href={"http://www.pokemongo.com/"} target="_blank">
							<img className="image" src={require('../pictures/pokemongoF.jpg')} />
						</a>
					</p>
					<button type='button' className='btn btn-link' onClick={this.sendMessageRed}>
						<img className="image" src={require('../pictures/red.png')} />
					</button>
					<button type='button' className='btn btn-link' onClick={this.sendMessageBlue}>
					  <img className="image" src={require('../pictures/blue.png')} />
					</button>
					  <button type='button' className='btn btn-link' onClick={this.sendMessageYellow}>
					<img className="image" src={require('../pictures/yellow.png')} />
					</button>
				</div>
			</div>
		)
	}
});

module.exports = pokemonGO;