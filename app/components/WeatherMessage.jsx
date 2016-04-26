var React = require('react');

var ReactMessage = ({temp, city}) => {
	return (
		<div>
			<h3>It's {temp} in {city}.</h3>
		</div>
	);
};

module.exports = ReactMessage;