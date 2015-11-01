var PJ = {
  elements: {},
  register: function(name, element) {
    if (this.elements[name]) throw "Element already exists: " + name;
    this.elements[name] = element;
  },
  render_app: function() {
    React.render(
      React.createElement(PJ.elements['index']), 
      document.getElementById("bodycontainer")
    );
  },
  render_element: function(name) {
    return React.createElement(this.elements[name]);
  },
  render_property: function(name, object) {
    return object && object[name] ? 
      React.createElement(this.elements[name], object[name]) : 
      React.createElement('span');
  },
  render_object: function(name, object) {
    return object ? 
      React.createElement(this.elements[name], object[name]) : 
      React.createElement('span');
  }
};
