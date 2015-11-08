(function() {
  var Support = React.createClass({
    render: function() {
      var buttons = this.props.buttons,
          children = [];

      console.log('support', buttons);
      buttons.forEach(function(button) {
        children.push(PJ.render_object(button.type, button, button.title));
      });

      return React.createElement('div', {className: "actions"}, children);
    }
  });

  PJ.register('support', Support);
})();
