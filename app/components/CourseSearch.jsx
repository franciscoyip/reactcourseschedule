var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var CourseSearch = React.createClass({

  render: function(){
    var {dispatch, showRegistered, searchText} = this.props;
    return (
      <div className="container-header">
        <div>
          <input type="search" ref="searchText" placeholder="Search for courses?" value={searchText} onChange={()=>{
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label><input type="checkbox" ref="showRegistered" checked={showRegistered} onChange={()=>{
              dispatch(actions.toggleShowRegistered());
            }}/> Show registered classes</label>
        </div>
      </div>
    );
  }
});

export default connect(
  (state)=>{
    return {
      showRegistered: state.showRegistered,
      searchText: state.searchText
    };
  }
)(CourseSearch);
