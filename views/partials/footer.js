(function() { 
  var Footer = React.createClass({
    render: function() {
      var exclude = this.props.exclude,
          items = ['FAQ', 'Donate', 'Volunteer', 'Join', 'Charities'],
          index = items.indexOf(exclude),
          children = [];
      
      var spliced_items = items.splice(index, 1);
      items.forEach(function (item, i) {
        children.push(React.createElement('a', {href: '#/' + item.toLowerCase(), key: item}, item));
        
        if (i < items.length - 1) {
          children.push(React.createElement('span', {key: item + "-span"}, ' - '));
        }
      });

      return React.createElement('div', {className: "footer"}, children);
    }
  });

  PJ.register('footer', Footer);
})();
