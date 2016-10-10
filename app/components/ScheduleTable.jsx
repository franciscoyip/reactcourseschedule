var React = require('react');

//connect to the Provider pass down by root component
var {connect} = require('react-redux');
var actions = require('actions');

var moment = require('moment');
var uuid = require('node-uuid');

export var ScheduleTable = React.createClass({
  renderTableHeader: function(){
    //Only Render from Monday to Friday
    var ths = [(<th key={uuid()}>Time</th>)];
    for(var ii = 1; ii <= 5; ii++){
      var day = moment().day(ii).format('dddd');
      var th = (<th key={ii}>{day}</th>);
      ths.push(th);
    }
    return (<thead><tr>{ths}</tr></thead>);
  },
  renderTableRows: function(){
    var start_time = moment().hour(6).minute(0);
    var end_time = moment().hour(21).minute(0);
    var {schedule} = this.props;
    var tr_rows = [];

    //helper functions to determine busy
    var isSlotOccupied = function(slot_start, courses){
      var slot_end = moment(slot_start).add(1, 'hour');

      return courses.find(function(course){
        var course_start = moment().hour(course.timeIndex[0]).minute(0);
        var course_end = moment().hour(course.timeIndex[1]).minute(0);
        return ! (course_start.isSameOrAfter(slot_end) || course_end.isSameOrBefore(slot_start) );
      });
    }

    //Start Render the table body HTML structure
    while(start_time.isSameOrBefore(end_time)){
      var tds = [];

      var start_td = (<td key={uuid()}>{start_time.format('h:mm a')}</td>);
      tds.push(start_td);

      for(var ii = 1; ii <= 5; ii++){
        var occupiedByCourse = isSlotOccupied(start_time, schedule[ii]);
        tds.push(this.renderTd(start_time, ii, occupiedByCourse));
      }

      tr_rows.push((<tr key={uuid()}>{tds}</tr>));
      start_time.add(1, 'hour');
    }
    return (<tbody>{tr_rows}</tbody>);
  },
  renderTd: function(start_time, index, course){

    var isOccupied = (course !== undefined);

    //Helper functions
    var getSlotClassname = function(isOccupied){
      return isOccupied ? 'slot busy' : 'slot';
    }

    var renderContent = (isOccupied) => {
      if(isOccupied){
        var {indexFilled} = this.courseMap[course.id];
        var needToFill = (indexFilled.indexOf(index) === -1) ? true : false;
        if(needToFill){
          indexFilled.push(index);
          return course.name;
        }
        return '';
      }
      return '';
    };

    if(isOccupied){
      if( ! (course.id in this.courseMap) ){
        this.courseMap[course.id] = {
          indexFilled: []
        };
      }
    }

    var className = getSlotClassname( isOccupied );
    return (<td key={start_time.unix()+' '+index} className={className}>{renderContent(isOccupied)}</td>);
  },
  renderTable: function(){

    if(!this.courseMap){
      this.courseMap = {};
    }

    return (
      <table>
        {this.renderTableHeader()}
        {this.renderTableRows()}
      </table>
    );
  },
  render: function(){
    var {schedule} = this.props;
    return (
      <div>
          {this.renderTable()}
      </div>
    );
  }
});

export default connect(
  (state)=>{
    return {
      schedule: state.schedule
    };
  }
)(ScheduleTable);
