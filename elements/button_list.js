PJ.Element.register(
  'button_list', 
  React.createClass({
    render: function() {
      var buttons = this.props.buttons,
          children = [];

      buttons.forEach(function(button, i) {
        children.push(PJ.Element.render_object(button.type, button, button.title + i));
      });

      return React.createElement('div', {className: "buttons"}, children);
    }
  })
);
