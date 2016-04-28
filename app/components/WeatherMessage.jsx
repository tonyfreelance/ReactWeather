var React = require('react');

var ReactMessage = ({temp, city}) => {
	return (
		<div>
			<h3 className="text-center">It's {temp} in {city}.</h3>
		</div>
	);
};

module.exports = ReactMessage;