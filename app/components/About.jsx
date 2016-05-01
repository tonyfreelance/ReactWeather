var React = require('react');

var About = (props) => {
	return (
			<div>
				<h1 className="text-center page-title">About</h1>
				<p>This is a weather application build on React.</p>
				<p>
					Here are some of the tools I used:					
				</p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework.
					</li>
					<li>
						<a href="http://openweathermap.com">Open Weather Map</a> - I used this to search for the weather.
					</li>
				</ul>
			</div>
		);
};

module.exports = About;