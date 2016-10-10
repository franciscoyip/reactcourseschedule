var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
import {CourseSearch} from 'CourseSearch';

describe('CourseSearch', function(){
  it('should exist', function(){
    expect(CourseSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input text change', function(){
    var searchText = 'english'
    var spy = expect.createSpy();
    var action = {
      type:'SET_SEARCH_TEXT',
      searchText
    };

    var courseSearch = TestUtils.renderIntoDocument(<CourseSearch dispatch={spy}/>);
    courseSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(courseSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_REGISTERED with checkbox checked value', function(){
    var spy = expect.createSpy();
    var action = {
      type: 'TOGGLE_SHOW_REGISTERED'
    };
    var courseSearch = TestUtils.renderIntoDocument(<CourseSearch dispatch={spy}/>);
    TestUtils.Simulate.change(courseSearch.refs.showRegistered);
    expect(spy).toHaveBeenCalledWith(action);
  });

});
