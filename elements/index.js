(function() {
  var Element = PJ.Element,
      Index = React.createClass({
        componentDidMount: function() {
          this.props.init_router(this.replaceState.bind(this));
        },
        render: function() {
          return React.createElement('div', {className: 'container'},
                   Element.render_property('header', this.state),
                   Element.render_property('media', this.state),
                   Element.render_property('info', this.state),
                   Element.render_property('form', this.state),
                   Element.render_property('button_list', this.state),
                   Element.render_property('footer', this.state)
                 );
        }
      });

  Element.register('index', Index);
})();
