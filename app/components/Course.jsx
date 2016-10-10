var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Course = React.createClass({

  render: function(){
    var {name, registered, author, time, days, id, imageid, dispatch} = this.props;
    var courseClassName = registered ? 'course course-registered' : 'course';

    //hardcode url prefix here
    var imageurlprefix = './img/users/';

    var renderInfo = function(){
      return (
        days.join(' and ') + ' from '+ time.join(' to ')
      );
    };

    var renderImageUrl = function(){
      //return 1;
      return imageurlprefix + imageid + '.jpg';
    };

    return (
      <div className={courseClassName} onClick={function(){
            dispatch(actions.toggleCourseRegistration(id));
        }}>
        <div>
          <input type="checkbox" checked={registered}/>
        </div>
        <div>
          <p>{name}</p>
          <p className="course-author">{author}</p>
          <p className="course-subtext">{renderInfo()}</p>
          <div className="icon-wrap"><img src={renderImageUrl()} alt={author}/></div>
        </div>
      </div>
    );
  }
});

export default connect(
  //dispatch already at props after we connect
)(Course);
