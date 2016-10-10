var React = require('react');

//connect to the Provider pass down by root component
var {connect} = require('react-redux');
var actions = require('actions');

import ScheduleNameForm from 'ScheduleNameForm';

export var ScheduleName = React.createClass({

  render: function(){
    var {scheduleName, editScheduleName, dispatch} = this.props;
    var renderScheduleName = function(){
      if(editScheduleName){
        return (
          <div className="container-header">
            <ScheduleNameForm/>
          </div>
        );
      }else{
        return (
          <h1 className="page-title">
            <span className="text-editable" title="Click to Edit" onClick={()=>{
              dispatch(actions.toggleEditScheduleName());
            }}>{scheduleName}</span>
         </h1>
        );
      }
    };

    return (
      <div>{renderScheduleName()}</div>
    );
  }
});

export default connect(
  (state)=>{
    return {
      scheduleName: state.scheduleName,
      editScheduleName: state.editScheduleName
    };
  }
)(ScheduleName);
