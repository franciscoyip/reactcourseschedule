var redux = require('redux');
var thunk = require('redux-thunk').default;
var {searchTextReducer, showRegisteredReducer, coursesReducer,
  scheduleReducer, scheduleNameReducer, editScheduleNameReducer, errorMessageReducer} = require('reducers');

export var configure = (initialState={})=>{
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showRegistered: showRegisteredReducer,
    courses: coursesReducer,
    schedule: scheduleReducer,
    scheduleName: scheduleNameReducer,
    editScheduleName: editScheduleNameReducer,
    errorMessage: errorMessageReducer
  });

  //weird
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
