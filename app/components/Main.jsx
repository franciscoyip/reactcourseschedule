var React = require('react');

var Nav = require('Nav');

var Main = React.createClass({
   render: function(){
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="small-11 small-centered medium-11 medium-centered large-8 large-centered columns">
            {this.props.children}
          </div>
        </div>

      </div>
    );
    },
});

module.exports = Main;
