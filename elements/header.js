PJ.Element.register(
  'header', 
  React.createClass({
    render: function() {
      return React.createElement('div', {className: "header"},
               React.createElement('h1', {key: 'title'}, this.props.title),
               React.createElement('em', {key: 'subtitle'}, this.props.subtitle)
             );
    }
  })
);
