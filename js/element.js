(function() {
  var Element = (function() {
    var elements = {};

    return {
      register: function(name, element) {
        if (elements[name]) throw "Element already exists: " + name;
        elements[name] = element;
      },
      render_app: function(init_router) {
        if (!elements['index']) throw "You must define an index element to render the app.";
        React.render(
          React.createElement(elements['index'], {init_router: init_router}), 
          document.getElementById("bodycontainer")
        );
      },
      render_element: function(name) {
        return React.createElement(elements[name]);
      },
      render_property: function(name, object, key) {
        if (!key) key = name;
        return object && object[name] ? 
          React.createElement(elements[name], $.extend({key: key}, object[name])) : 
          null;
      },
      render_object: function(name, object, key) {
        return object ? 
          React.createElement(elements[name], $.extend({key: key}, object)) : 
          null;
      }
    }
  }());

  PJ.register('Element', Element);
})();
