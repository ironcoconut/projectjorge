(function() {
  var ButtonList = React.createClass({
    render: function() {
      var buttons = this.props.buttons,
          children = [];

      buttons.forEach(function(button) {
        children.push(PJ.render_object(button.type, button, button.title));
      });

      return React.createElement('div', {className: "buttons"}, children);
    }
  });

  PJ.register('button_list', ButtonList);
})();
