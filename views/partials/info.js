(function() { 
  var Element = PJ.Element,
      Info = React.createClass({
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
                             {onClick: this.onClick, key: "summary"}, 
                             this.props.summary + ' ', 
                             React.createElement('a', {href: ""}, this.state.moreLess)
                           ),
                           Element.render_object('more_info', {show: this.state.showResults, content: this.props.content}, 'more_info')
                         ];

          return React.createElement('div', {className: "info", key: 'info'}, children);
        }
      });

  Element.register('info', Info);
})();
