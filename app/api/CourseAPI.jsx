//var $ = require('jquery');

module.exports = {

  filterCourses: function(courses, showRegistered, searchText) {
    var filteredCourses = courses;
    //Todos

    //Filter by registered
    filteredCourses = filteredCourses.filter((course)=>{
      return !course.registered || showRegistered;
    });

    //Filter by searchText
    filteredCourses = filteredCourses.filter((course)=>{
      if(searchText){
        return (course.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
      }
      return true;
    });

    //Sort courses with non-registered first
    filteredCourses.sort(function(a, b){
      if(a.registered === false && b.registered === true){
        return -1;
      }else if(a.registered && b.registered === false){
        return 1;
      }
      return 0;
    });

    return filteredCourses;
  }
};
