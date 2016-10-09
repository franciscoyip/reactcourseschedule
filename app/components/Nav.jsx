var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Class Schedule App</li>
            <li><IndexLink to="/" activeClassName="active-link">Catalog</IndexLink></li>
            <li><Link to="/schedule" activeClassName="active-link">My Schedule</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Done by Francisco Yip</li>
            <li className="menu-text icon-wrap"><div className="icon"><img src="./img/logo.jpg"/></div></li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;
