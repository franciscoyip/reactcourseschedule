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
    case 'TOGGLE_COURSE': //REGISTER OR UNREGISTER COURSE
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

var getDefaultSchedule = function(){
  var numberOfDays = 7;
  var schedule = [];
  for(var ii = 0; ii < numberOfDays; ii++){
    schedule.push([]);
  }
  return schedule;
};

var defaultSchedule = getDefaultSchedule();

export var scheduleReducer = (state = defaultSchedule, action)=>{
  switch( action.type ){

    case 'ADD_COURSE_TO_SCHEDULE':
      var dayIndexes = action.course.dayIndex;
      var newSchedule = [...state];
      dayIndexes.forEach(function(dayIndex){
        newSchedule[dayIndex].push(action.course);
      });
      return newSchedule;

    case 'REMOVE_COURSE_FROM_SCHEDULE':
      var dayIndexes = action.course.dayIndex;
      var newSchedule = [...state];
      dayIndexes.forEach(function(dayIndex){
          var index = newSchedule[dayIndex].findIndex((course)=>{
            return course.id === action.course.id;
          });
          if(index !== -1){
            newSchedule[dayIndex].splice(index, 1);
          }
      });
      return newSchedule;

    default:
      return state;
      //break;
  }
};

export var scheduleNameReducer = (state = 'Editable Schedule Name', action)=>{
  var type = action.type;
  switch (type) {
    case 'SET_SCHEDULE_NAME':
      //if empty string, don't update
      return action.scheduleName ? action.scheduleName : state;
      //break;
    default:
      return state;
      //break;
  }
};

export var editScheduleNameReducer = (state = false, action)=>{
  var type = action.type;
  switch (type) {
    case 'TOGGLE_EDIT_SCHEDULENAME':
      return !state;
      //break;
    default:
      return state;
      //break;
  }
};

export var errorMessageReducer = (state = '', action)=>{
  var type = action.type;
  switch (type) {
    case 'SET_ERROR_MSG':
      if(!action.errorMessage){
        return '';
      }
      return action.errorMessage + '_'+Date.now();
      //break;
    default:
      return state;
      //break;
  }
};
