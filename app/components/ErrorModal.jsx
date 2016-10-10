var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var {connect} = require('react-redux');

export var ErrorModal = React.createClass({
  renderModal: function(){
    var {errorMessage, dispatch} = this.props;

    if(!errorMessage || errorMessage.length <= 0){return;}
    errorMessage = errorMessage.split('_')[0]
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Oops!!</h4>
        <p className='errorMessage'>{errorMessage}</p>
        <p>
          <button className="button hollow" data-close="">OK</button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();

  },
  render: function(){
    this.renderModal();
    return <div></div>;
  }
});

export default connect(
  //state this component need
  (state)=>{
    return {errorMessage: state.errorMessage};
  }
)(ErrorModal);
