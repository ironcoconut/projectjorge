(function() {
  var Actions = React.createClass({
    render: function() {
      var props = this.props,
          buttons = ['primary_button', 'secondary_button', 'skip_button'],
          children = [];

      buttons.forEach(function(name) {
        var data = props[name];

        if (data) {
          children.push(PJ.render_object(data.type, data, name));
        }
      });

      return React.createElement('div', {className: "actions"}, children);
    }
  });

  PJ.register('actions', Actions);
})();
