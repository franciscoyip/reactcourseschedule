var React = require('react');

//connect to the Provider pass down by root component
var {connect} = require('react-redux');
var actions = require('actions');

export var ScheduleNameForm = React.createClass({

  render: function(){
    var {scheduleName, dispatch} = this.props;
    return (
      <form ref="nameform" onSubmit={(e)=>{
          e.preventDefault();
          dispatch(actions.setScheduleName(this.refs.nameInput.value));
          dispatch(actions.toggleEditScheduleName());
        }}>
        <input type="text" defaultValue={scheduleName} placeholder="Please enter your schedule name" ref="nameInput"/>
        <button className="button">Save</button>
      </form>
    );
  }
});

export default connect(
  (state)=>{
    return {
      scheduleName: state.scheduleName
    };
  }
)(ScheduleNameForm);
