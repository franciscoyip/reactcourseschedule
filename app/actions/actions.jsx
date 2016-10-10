var axios = require('axios');
var moment = require('moment');

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText //eq to ES5 searchText:searchText
  }
};

export var addCourses = (courses)=>{
  return {
    type: 'ADD_COURSES',
    courses
  };
};

export var addCourse = (id)=>{
  return {
    type: 'TOGGLE_COURSE',
    id
  };
};

export var startLoadCourses = ()=>{

  var url = "/data/catalog.json";

  return (dispatch, getState) =>{
    function success(res){
      console.log(res.data.courses);
      dispatch(addCourses(res.data.courses));
    };

    function failed(res){
      dispatch(setErrorMessage('Unable to load courses. Pleae try again.'));
    };

    return axios.get(url).then(success).catch(failed);

  };
};

export var toggleShowRegistered = () =>{
  return {
    type: 'TOGGLE_SHOW_REGISTERED'
  };
};

export var toggleCourseRegistration = (id)=>{
  return (dispatch, getState)=>{
    var {courses} = getState();
    var newCourse = courses.find((course)=>{
      return course.id === id;
    });
    if(newCourse.registered){
      //dispatch UNREGISTER
      dispatch(addCourse(id));
      dispatch(removeCourseFromSchedule(newCourse));
    }else{
      dispatch(registerCourse(id));
    }
  };
}

export var registerCourse = (id) =>{

  return (dispatch, getState)=>{
    var {courses, schedule} = getState();
    var newcourse = courses.find(function(course){
      return course.id === id;
    });

    // if good time
    if(haveNoConflict(newcourse, schedule)){
      dispatch(addCourse(id));
      dispatch(addCourseToSchedule(newcourse));
    }else{
      //if no good
      dispatch(setErrorMessage('Unable to add this course due to conflict with existing schedule'));
    }
  }

};

export var addCourseToSchedule = (course) =>{
  return {
    type: 'ADD_COURSE_TO_SCHEDULE',
    course
  };
}

export var removeCourseFromSchedule = (course) =>{
  return {
    type: 'REMOVE_COURSE_FROM_SCHEDULE',
    course
  };
}

export var setErrorMessage = (msg) =>{
  return {
    type: 'SET_ERROR_MSG',
    errorMessage: msg
  };
}

var haveNoConflict = function(newCourse, schedule){
  var {dayIndex, timeIndex} = newCourse;
  var start_new = moment().hour(timeIndex[0]);
  var end_new = moment().hour(timeIndex[1]);


  return dayIndex.every((singleDayIndex)=>{
    return schedule[singleDayIndex].every(function(course){
      var {timeIndex} = course;
      var start_exist = moment().hour(timeIndex[0]);
      var end_exist = moment().hour(timeIndex[1]);
      return start_new.isSameOrAfter(end_exist) || end_new.isSameOrBefore(start_exist);
    });
  });

}
