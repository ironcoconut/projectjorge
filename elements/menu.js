PJ.Element.register(
  'menu', 
  React.createClass({
    render: function() {
      var items = this.props.items;

      function buildChildren() {
        return items.map(function(item) {
          var element = item.a_attributes ? React.createElement('a', item.a_attributes, item.label.toUpperCase()) : item.label.toUpperCase();
          return React.createElement('li', item.li_attributes, element);
        });
      };

      return React.createElement('ul', {className: "menu"},
               React.createElement('li', {className: "user", key: 'user'}, "u: mactle | LOGOUT"), 
               buildChildren()
             );
    }
  })
);
