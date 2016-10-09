var React = require('react');

//connect to the Provider pass down by root component
var {connect} = require('react-redux');

import Course from 'Course';
var CourseAPI = require('CourseAPI');

export var CourseList = React.createClass({
  render: function(){
    var {courses, showRegistered, searchText} = this.props;

    var renderCourses = function(){

      var filteredCourses = CourseAPI.filterCourses(courses, showRegistered, searchText);

      if(filteredCourses.length === 0){
        return <p className="container-msg">No Courses Available</p>;
      }else{
        return filteredCourses.map(function(course){
          return (
            <Course key={course.id} {...course}/>
          );
        });
      }
    };

    return (
      <div>
        {renderCourses()}
      </div>
    );
  }
});

export default connect(
  //state this component need
  (state)=>{
    return state;
  }
)(CourseList);
