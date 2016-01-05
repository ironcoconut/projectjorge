PJ.Element.register(
  'menu', 
  React.createClass({
    render: function() {
      return React.createElement('ul', {className: "menu"},
               React.createElement('li', {key: 'create'}, "CREATE"),
               React.createElement('li', {className: "active", key: 'read'}, "READ"),
               React.createElement('li', {className: "user", key: 'user'}, "u: mactle | LOGOUT")
             );
    }
  })
);
