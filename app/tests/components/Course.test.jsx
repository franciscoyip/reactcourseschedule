var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var {Course} = require('Course');

describe('Course', function(){
  it('should exist', function(){
    expect(Course).toExist();
  });

  it('should dispatch REGISTER_COURSE action with id on click', function(){
    var courseData = {
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
    };
    var spy = expect.createSpy();
    var course = TestUtils.renderIntoDocument(<Course {...courseData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(course));

    TestUtils.Simulate.click($el.get(0));
    expect(spy).toHaveBeenCalledWith({
      type:'REGISTER_COURSE',
      id: 8
    });

  });
});
