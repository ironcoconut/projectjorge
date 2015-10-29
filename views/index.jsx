var Index = React.createClass({
  getInitialState: function() {
    return {
      header: null,
      media: null,
      info: null,
      actions: null,
      footer: null,
      ready: false
    };
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        data.ready = true;
        this.setState(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    if (this.state.ready) {
      return (
        <div className="container">
          <Header data={this.state.header} />
          <Media data={this.state.media} />
          <Info data={this.state.info} />
          <Actions data={this.state.actions} />
          <Footer data={this.state.footer} />
        </div>
      );
    } else {
      return (<div className="container">Loading...</div>);
    }
  }
});
