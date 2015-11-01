var Render = React.createClass({
  render: function () {
    var element = this.props.data[0],
        data = this.props.data[1];

    return (
      { this.props.children ? React.createElement(element, data) : <span /> }
    );
  }
});
