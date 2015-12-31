PJ.Element.register(
  'link_button', 
  React.createClass({
    render: function() {
      var children = [ React.createElement('strong', {key: 'strong'}, this.props.title) ];

      if (this.props.subtitle) {
        children.push(React.createElement('br', {key: 'break'}));
        children.push(React.createElement('span', {key: 'span'}, this.props.subtitle));
      }

      return React.createElement('a', this.props.attributes, children);
    }
  })
);
