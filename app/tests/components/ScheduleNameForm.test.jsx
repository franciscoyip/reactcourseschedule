var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
import {ScheduleNameForm} from 'ScheduleNameForm';

describe('ScheduleNameForm', function(){
  it('should exist', function(){
    expect(ScheduleNameForm).toExist();
  });

  it('should dispatch toggleEditScheduleName on submit', function(){

    var spy = expect.createSpy();
    var action = {
      type:'TOGGLE_EDIT_SCHEDULENAME'
    };

    var scheduleNameForm = TestUtils.renderIntoDocument(<ScheduleNameForm dispatch={spy}/>);
    TestUtils.Simulate.submit(scheduleNameForm.refs.nameform);

    expect(spy).toHaveBeenCalledWith(action);
  });

});
