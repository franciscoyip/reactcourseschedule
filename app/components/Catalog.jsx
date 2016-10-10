var React = require('react');

//components
import CourseSearch from 'CourseSearch';
import CourseList from 'CourseList';

import ErrorModal from 'ErrorModal';

var Catalog = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="page-title">Catalog</h1>
          <div className="container">
              <CourseSearch/>
              <CourseList/>
              <ErrorModal/>
          </div>
      </div>
    );
  },

});

module.exports = Catalog;
