var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Layout components
var Main = require('Main');
var Catalog = require('Catalog');
var Schedule = require('Schedule');


var actions = require('actions');
var store = require('configureStore').configure();

store.dispatch(actions.startLoadCourses());

require('style!css!sass!applicationStyles');

//Load CSS Framework
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Catalog}></IndexRoute>
        <Route path="schedule" component={Schedule}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
