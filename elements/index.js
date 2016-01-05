PJ.Element.register(
  'index', 
  React.createClass({
    getInitialState: function() {
      return {data: []};
    },
    componentDidMount: function() {
      this.props.init_router(this.replaceState.bind(this));
    },
    render: function() {
      var state = this.state;

      return React.createElement('div', {className: 'container'},
        state.data.map(function(item) {
          return PJ.Element.render_object(item.type, item);
        })
      );
    }
  })
);
