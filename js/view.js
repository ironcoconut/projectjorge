(function() {
  var View = {
        register: function(name, element) {
          if (this[name]) throw "Element already exists: " + name;
          this[name] = element;
        }
      }

  PJ.register('View', View);
})();
