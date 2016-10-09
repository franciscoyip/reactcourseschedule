var React = require('react');

//components
import CourseSearch from 'CourseSearch';
import CourseList from 'CourseList';

var Catalog = React.createClass({
  render: function(){
    //var {count, countdownStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Catalog</h1>
          <div className="container">
              <CourseSearch/>
              <CourseList/>
          </div>
      </div>
    );
  },

});

//<ClassList/>

module.exports = Catalog;
