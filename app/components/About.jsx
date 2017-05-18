var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <hr />
      <p>Created by me (<a href="https://github.com/jacobmoyle?tab=repositories">Jacob Moyle</a>) to learn <a href="https://facebook.github.io/react/">React.js</a>.</p>
      <p>You can find my source code <a href="https://github.com/jacobmoyle/react_weather">here</a> and Open Weather Map's API <a href="https://openweathermap.org/api">here</a>.</p>
    </div>
  );
};

module.exports = About;
