var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component

import ConnectedCourseList, {CourseList} from 'CourseList';
import ConnectedCourse, {Course} from 'Course';

import {configure} from 'configureStore';

describe('CourseList', function(){
  it('should exist', function(){
    expect(CourseList).toExist();
  });

  it('should render one Course Component for each course item', function(){

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
         ]
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
         ]
      }
    ];
    var extraCourseProps = {
      registered: false
    };
    courses = courses.map((course)=>{
      return Object.assign(course, extraCourseProps);
    });
    var store = configure({courses});
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedCourseList/>
      </Provider>
    );
    var courseList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedCourseList)[0];
    var coursesComponents = TestUtils.scryRenderedComponentsWithType(courseList, ConnectedCourse);

    expect(coursesComponents.length).toBe(courses.length);
  });

  it('should render simple message if no course is loaded', function(){

    var courses=[];

    var courseList = TestUtils.renderIntoDocument(<CourseList courses={courses}/>);
    var $el = $(ReactDOM.findDOMNode(courseList));

    expect($el.find('.container-msg').length).toBe(1);
  });

});
