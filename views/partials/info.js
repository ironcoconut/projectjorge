(function() { 
  var Info = React.createClass({
    defaultState: { 
      showResults: false,
      moreLess: 'More'
    },
    getInitialState: function() {
      return this.defaultState;
    },
    componentWillReceiveProps: function () {
      this.setState(this.defaultState);
    },
    onClick: function(e) {
      e.preventDefault();
      this.setState({
        showResults: !this.state.showResults,
        moreLess: (this.state.moreLess == 'More' ? 'Less' : 'More')
      });
    },
    render: function() {
      var children = [ React.createElement(
                         'p', 
                         {onClick: this.onClick}, 
                         this.props.summary + ' ', 
                         React.createElement('a', {href: ""}, this.state.moreLess)
                       ),
                       PJ.render_object('more_info', {show: this.state.showResults, content: this.props.content})
                     ];

      return React.createElement('div', {className: "info"}, children);
    }
  });

  PJ.register('info', Info);
})();
