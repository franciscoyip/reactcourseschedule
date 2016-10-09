var React = require('react');

var expect = require('expect');

var TestUtils = require('react-addons-test-utils');

//actual Component
var CourseAPI = require('CourseAPI');

describe('CourseAPI', function(){
  it('should exist', function(){
    expect(CourseAPI).toExist();
  });

  describe('filterCourses', function(){
    var courses=[
      {
         "id":8,
         "name":"Art of the Deal",
         "author":"Donald J Duck",
         "imageid":"90",
         "time":[
            "1pm",
            "3pm"
         ],
         "days":[
            "Tuesday",
            "Thursday"
         ],
         "dayIndex":[
            2,
            4
         ],
         "timeIndex":[
            13,
            15
         ],
         "registered": true,
      },
      {
         "id":9,
         "name":"Massage Therapy",
         "author":"James Jones",
         "imageid":"74",
         "time":[
            "11am",
            "12pm"
         ],
         "days":[
            "Tuesday",
            "Thursday"
         ],
         "dayIndex":[
            2,
            4
         ],
         "timeIndex":[
            11,
            12
         ],
         "registered": false,
      },
      {
         "id":10,
         "name":"Massage Therapy",
         "author":"James Jones",
         "imageid":"74",
         "time":[
            "11am",
            "12pm"
         ],
         "days":[
            "Tuesday",
            "Thursday"
         ],
         "dayIndex":[
            2,
            4
         ],
         "timeIndex":[
            11,
            12
         ],
         "registered": false,
      }
    ];

    it('should sort courses by registered status', function(){
      var filteredCourses = CourseAPI.filterCourses(courses, true, '');
      expect(filteredCourses[0].registered).toBe(false);
      expect(filteredCourses[2].registered).toBe(true);
    });

    it('should filter courses by search text', function(){
      var searchText = 'Massage';
      var filteredCourses = CourseAPI.filterCourses(courses, true, searchText);
      expect(filteredCourses.length).toBe(2);
    });

    it('should return all courses search text is empty', function(){
      var searchText = '';
      var filteredCourses = CourseAPI.filterCourses(courses, true, searchText);
      expect(filteredCourses.length).toBe(3);
    });

  });
});
