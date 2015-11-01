(function() { 
  var Header = React.createClass({
    render: function() {
      return React.createElement('div', {className: "header"},
               React.createElement('h1', null, this.props.title),
               React.createElement('em', null, this.props.subtitle)
             );
    }
  });

  PJ.register('header', Header);
})();
