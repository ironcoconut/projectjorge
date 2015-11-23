var PJ = (function() {
  return {
    load_json: function (path, slug) {
      var url = '',
          root_path = 'api/' + path,
          ext = '.json';

      if (slug) {
        url = root_path + '/' + slug + ext;
      } else {
        url = root_path + ext;
      }
      return $.ajax({
        url: url,
        dataType: 'json'
      });
    },
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
