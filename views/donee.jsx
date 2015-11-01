var Donee = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Header data={this.state.header} />
        <Media data={this.state.media} />
        <Info data={this.state.info} />
        <Actions data={this.state.actions} />
        <Footer data={this.state.footer} />
      </div>
    );
  }
});
