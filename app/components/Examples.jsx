var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Reno">Reno, NV</Link>
        </li>
        <li>
          <Link to="/?location=London">London</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
