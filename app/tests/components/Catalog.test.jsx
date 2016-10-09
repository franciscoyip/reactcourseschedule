var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');

var $ = require('jQuery');

var configureStore = require('configureStore');

import CourseList from 'CourseList';
import CourseSearch from 'CourseSearch';

var TestUtils = require('react-addons-test-utils');

//actual Component
var Catalog = require('Catalog');

describe('Catalog', function(){
  it('should exist', function(){
    expect(Catalog).toExist();
  });

  it('should render CoursesList', ()=>{
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Catalog/>
      </Provider>
    );

    var catalog = TestUtils.scryRenderedComponentsWithType(provider, Catalog)[0];
    var courseList = TestUtils.scryRenderedComponentsWithType(catalog, CourseList);
    expect(courseList.length).toEqual(1);
  });

  it('should render CoursesSearch', ()=>{
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Catalog/>
      </Provider>
    );

    var catalog = TestUtils.scryRenderedComponentsWithType(provider, Catalog)[0];
    var courseSearch = TestUtils.scryRenderedComponentsWithType(catalog, CourseSearch);
    expect(courseSearch.length).toEqual(1);
  });

});
