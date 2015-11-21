(function() {
  var Element = PJ.Element,
      ButtonList = React.createClass({
        render: function() {
          var buttons = this.props.buttons,
              children = [];

          buttons.forEach(function(button, i) {
            children.push(Element.render_object(button.type, button, button.title + i));
          });

          return React.createElement('div', {className: "buttons"}, children);
        }
      });

  Element.register('button_list', ButtonList);
})();
