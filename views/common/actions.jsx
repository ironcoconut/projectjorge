var Actions = React.createClass({
  render: function() {
    console.log('Action props: ', this.props);
    var props = this.props,
        buttons = ['primary_button', 'secondary_button', 'skip_button'],
        children = [];

    buttons.forEach(function(name) {
      var data = props[name];

      if (data) {
        children.push(React.createElement(PJ.elements['button'], data));
      }
    });

    return React.createElement('div', {className: "actions"}, children);
  }
});

PJ.register('actions', Actions);

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
