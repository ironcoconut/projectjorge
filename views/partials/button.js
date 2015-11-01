(function() {
  var Button = React.createClass({
    render: function() {
      var children = [ React.createElement('strong', null, this.props.title) ];

      if (this.props.subtitle) {
        children.push(React.createElement('br'));
        children.push(React.createElement('span', null, this.props.subtitle));
      }

      return React.createElement('a', this.props.attributes, children);
    }
  });

  PJ.register('button', Button);
})();
