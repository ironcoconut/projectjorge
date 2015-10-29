var Info = React.createClass({
  getInitialState: function() {
    return { 
      showResults: false,
      moreLess: 'More'
    };
  },
  onClick: function() {
    this.setState({
      showResults: !this.state.showResults,
      moreLess: (this.state.moreLess == 'More' ? 'Less' : 'More')
    });
  },
  render: function() {
    return (
      <div className="info">
        <p onClick={this.onClick}>{this.props.data.summary} <a href="#">{this.state.moreLess}.</a></p>
        <MoreInfo show={this.state.showResults} content={this.props.data.content} />
      </div>
    );
  }
});

var MoreInfo = React.createClass({
  render: function () {
    function set_html (content) {
      return {__html: content};
    }

    return (
      <div className={this.props.show ? '' : 'hidden'} dangerouslySetInnerHTML={set_html(this.props.content)} />
    );
  }
});
