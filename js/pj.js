var PJ = {
  elements: {},
  register: function(name, element) {
    if (this.elements[name]) throw "Element already exists: " + name;
    this.elements[name] = element;
  },
  render: function(name, state) {
    return state && state[name] ? 
      React.createElement(this.elements[name], state[name]) : 
      React.createElement('span');
  }
};
