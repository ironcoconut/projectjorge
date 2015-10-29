var Actions = React.createClass({
  render: function() {
    var primary = this.props.data.primary_button,
        secondary = this.props.data.secondary_button,
        skip = this.props.data.skip;

        console.log(primary);
    return (
      <div className="actions">
        <Button data={primary} color='blue' />
        <Button data={secondary} color='green' />
        <Button data={skip} color='gray' />
      </div>
    );
  }
});

var Button = React.createClass({
  render: function() {
    if(this.props.data) {
      var classes = "button tall " + this.props.color;

      return (
        <a href="#" className={classes}>
          <div className="center">
            <strong>{this.props.data.title}</strong>
            <ButtonSubtitle subtitle={this.props.data.subtitle} />
          </div>
        </a>
      );
    } else {
      return (<span />);
    }
  }
});

var ButtonSubtitle = React.createClass({
  render: function() {
    if(this.props.subtitle) {
      return (
        <span>
          <br />
          {this.props.subtitle}
        </span>
      );
    } else {
      return (<span />);
    }
  }
});
