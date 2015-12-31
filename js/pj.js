var PJ = (function() {
  function get_url (path, slug) {
    var root_path = 'http://localhost:4000/api/' + path;

    return slug ? root_path + '/' + slug : root_path;
  };

  function register (name, element) {
    if (this[name]) throw "Element already exists: " + name;
    this[name] = element ? element : {register: register};
  }

  return {
    load_json: function (path, slug) {
      return $.ajax({
        url: get_url(path, slug),
        dataType: 'json'
      }).fail(function() {
        console.log('Invalid [path, slug]:', path, slug);
        console.log(arguments);
      });
    },
    save_json: function (path, data) {
      return $.post(get_url(path), {user: data});
    },
    start: function() {
      var Router = this.Router;

      Parse.initialize("7gKwKXIqeZm2mJpSgzzt0oYMNF9zwjzBr2YKVRN6", "H0MHpFwR7ksEPxCeuAqNQnK7dzXKVJOeKySLbiNb");
      this.Element.render_app(function(set_state) {
        Router.initialize(set_state);
      });
    },
    register: register
  }
}());
