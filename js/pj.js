var PJ = (function() {
  return {
    load_json: function (path, slug) {
      var url = '',
          root_path = 'http://localhost:4000/api/' + path;

      if (slug) {
        url = root_path + '/' + slug;
      } else {
        url = root_path;
      }
      return $.ajax({
        url: url,
        dataType: 'json'
      }).fail(function() {
        console.log('Invalid [path, slug]:', path, slug);
        console.log(arguments);
      });
    },
    start: function() {
      var Router = this.Router;

      this.Model.initialize();
      this.Element.render_app(function(set_state) {
        Router.initialize(set_state);
      });
    },
    register: function(name, element) {
      if (this[name]) throw "Name already exists: " + name;
      this[name] = element;
    }
  }
}());
