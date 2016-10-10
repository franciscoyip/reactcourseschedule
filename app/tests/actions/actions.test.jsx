var expect = require('expect');
var actions = require('actions');

describe('Actions', function(){
  it('should exist', function(){
    expect(actions).toExist();
  });

  it('should generate search text action', function(){
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText:'test text'
      };

      var resultAction = actions.setSearchText(action.searchText);

      expect(resultAction).toEqual(action);
  });

  it('should generate toggle show completed', function(){
      var action = {
        type: 'TOGGLE_SHOW_REGISTERED'
      };

      var resultAction = actions.toggleShowRegistered();

      expect(resultAction).toEqual(action);
  });

  it('should generate set error message action', function(){
      var action = {
        type: 'SET_ERROR_MSG',
        errorMessage: 'Hello Hello'
      };

      var resultAction = actions.setErrorMessage(action.errorMessage);

      expect(resultAction).toEqual(action);
  });

});
