var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <em>{this.props.subtitle}</em>
      </div>
    );
  }
});

PJ.register('header', Header);
