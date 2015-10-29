var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <h1>{this.props.data.title}</h1>
        <em>{this.props.data.subtitle}</em>
      </div>
    );
  }
});
