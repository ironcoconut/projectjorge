PJ.Element.register(
  'footer', 
  React.createClass({
    render: function() {
      var items = this.props.items,
          children = [];
      
      items.forEach(function (item, i) {
        if (item.path) {
          children.push(React.createElement('a', 
                                            {href: item.path, key: item.label}, 
                                            item.label));
        } else {
          children.push(React.createElement('span', 
                                            {key: item.label}, 
                                            item.label));
        }
        
        if (i < items.length - 1) {
          children.push(React.createElement('span', 
                                            {key: item.label + "-span"}, 
                                            ' - '));
        }
      });

      return React.createElement('div', {className: "footer"}, children);
    }
  })
);
