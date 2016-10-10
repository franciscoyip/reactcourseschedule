var React = require('react');

import ScheduleName from 'ScheduleName';
import ScheduleTable from 'ScheduleTable';

var Schedule = React.createClass({
  render: function(){
    return (
      <div className="small-11 small-centered medium-11 medium-centered large-11 large-centered columns">
        <div className="schedule">
          <ScheduleName/>
          <ScheduleTable/>
        </div>
      </div>
    );
  },

});

module.exports = Schedule;
