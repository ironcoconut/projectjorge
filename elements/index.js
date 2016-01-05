PJ.Element.register(
  'index', 
  React.createClass({
    componentDidMount: function() {
      this.props.init_router(this.replaceState.bind(this));
    },
    render: function() {
      return React.createElement('div', {className: 'container'},
               PJ.Element.render_property('menu', {menu: true}),
               PJ.Element.render_property('header', this.state),
               PJ.Element.render_property('media', this.state),
               PJ.Element.render_property('info', this.state),
               PJ.Element.render_property('form', this.state),
               PJ.Element.render_property('button_list', this.state),
               PJ.Element.render_property('footer', this.state)
             );
    }
  })
);
