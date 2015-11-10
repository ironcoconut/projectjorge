(function() {
  var ButtonList = React.createClass({
    render: function() {
      var buttons = this.props.buttons,
          children = [];

      buttons.forEach(function(button, i) {
        console.log(button);
        children.push(PJ.render_object(button.type, button, button.title + i));
      });

      return React.createElement('div', {className: "buttons"}, children);
    }
  });

  PJ.register('button_list', ButtonList);
})();
