var PJ = (function() {
  return {
    start: function() {
      this.Model.initialize();
      this.Element.render_app();
    },
    register: function(name, element) {
      if (this[name]) throw "Name already exists: " + name;
      this[name] = element;
    }
  }
}());
