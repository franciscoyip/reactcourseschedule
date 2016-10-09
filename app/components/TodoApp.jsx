var React = require('react');

//node lib
var uuid = require('node-uuid');
var moment = require('moment');

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
//var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  /*
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  */
  /*
  handleAddTodo: function(strTodo){
    this.setState({
      todos: [...this.state.todos, {
        text: strTodo,
        id: uuid(),
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
      }]
    });
  },
  handleSearch: function(showCompleted, text){
    this.setState({
      showCompleted: showCompleted,
      searchText: text.toLowerCase()
    });
  },
  */
  /*
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map(function(todo){
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = (todo.completed === true) ? Math.floor(Date.now() / 1000) : null;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  */
  render: function(){
    //var {todos, showCompleted, searchText} = this.state;
    //var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">TodoApp</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-7 large-6">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

//removed the following within the render and cleaned
//<TodoSearch onSearch={this.handleSearch}/>
//<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
//<AddTodo onAddTodo={this.handleAddTodo}/>

module.exports = TodoApp;
