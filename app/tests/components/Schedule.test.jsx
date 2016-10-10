var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

import ScheduleName from 'ScheduleName';
import ScheduleTable from 'ScheduleTable';

var configureStore = require('configureStore');

//actual Component
var Schedule = require('Schedule');

describe('Schedule', function(){
  it('should exist', function(){
    expect(Schedule).toExist();
  });

  it('should render Schedule Name', function(){

    var store = configureStore.configure();

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Schedule/>
      </Provider>
    );

    var schedule = TestUtils.scryRenderedComponentsWithType(provider, Schedule)[0];
    var scheduleNameComponent = TestUtils.scryRenderedComponentsWithType(schedule, ScheduleName);

    expect(scheduleNameComponent.length).toBe(1);
  });

  it('should render Schedule Table', function(){

    var store = configureStore.configure();

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Schedule/>
      </Provider>
    );

    var schedule = TestUtils.scryRenderedComponentsWithType(provider, Schedule)[0];
    var scheduleTBComponent = TestUtils.scryRenderedComponentsWithType(schedule, ScheduleTable);

    expect(scheduleTBComponent.length).toBe(1);
  });
});
