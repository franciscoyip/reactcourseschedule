var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action)=>{

  var type = action.type;

  switch (type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
      //break;
    default:
      return state;
      //break;
  }

};

export var showRegisteredReducer = (state = false, action)=>{

  var type = action.type;

  switch (type) {
    case 'TOGGLE_SHOW_REGISTERED':
      return !state;
      //break;
    default:
      return state;
      //break;
  }

};

export var coursesReducer = (state = [], action)=>{

  var type = action.type;

  var extraCourseProps = {
    registered: false
  };

  switch (type) {
    case 'ADD_COURSES':
      return action.courses.map((course)=>{
        return Object.assign(course, extraCourseProps);
      });
      //break;
    case 'REGISTER_COURSE':
      return state.map((o)=>{
        var course = Object.assign({}, o);
        if(course.id === action.id){
          course.registered = !course.registered;
          return course;
        }
        return course;
      });
    default:
      return state;
      //break;
  }

};
