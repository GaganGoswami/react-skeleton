var React = require('react');
var Listitem = require('./Listitem.jsx');

var ingredients = [{"id":1,"text":"Burger"},{"id":2,"text":"cheese"},{"id":3,"text":"Patatos"}];

var List = React.createClass({
	render: function() {
		var listItems = ingredients.map(function(item){
			return <Listitem key={item.id} ingredient={item.text}/>
		});


		return (
			<ul>{listItems}</ul>
		);
	}
});

module.exports = List;
