var axios = require('axios');

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

export var startLoadCourses = ()=>{

  var url = "/data/catalog.json";

  return (dispatch, getState) =>{

    function success(res){
      //console.log(res.data.courses);
      dispatch(addCourses(res.data.courses))
    };

    return axios.get(url).then(success);

  };
};

export var toggleShowRegistered = () =>{
  return {
    type: 'TOGGLE_SHOW_REGISTERED'
  };
};

export var registerCourse = (id) =>{
  return {
    type: 'REGISTER_COURSE',
    id
  };
};
