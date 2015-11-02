(function() {
  var Index = React.createClass({
    componentDidMount: function() {
      var load_json = this.load_json,
          router = Router({
            '/donate/:slug': load_json.bind(this, "donate"),
            '/donate': load_json.bind(this, "donate"),
            '/volunteer/:slug': load_json.bind(this, "volunteer"),
            '/volunteer': load_json.bind(this, "volunteer"),
            '/charities/:slug': load_json.bind(this, "charities"),
            '/charities/': load_json.bind(this, "charities"),
            '/join': load_json.bind(this, "join"),
            '/faq': load_json.bind(this, "faq"),
            '/': load_json.bind(this, "donate")
          });
      router.init('/');
    },
    load_json: function (path, slug) {
      var url = '',
          root_path = 'api/' + path,
          ext = '.json';

      if (slug) {
        url = root_path + '/' + slug + ext;
      } else {
        url = root_path + ext;
      }
      $.ajax({
        url: url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          if (data.redirect) window.location = '#/' + data.redirect;
          this.replaceState(data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props, status, err.toString());
          if (slug) window.location = '#/' + path;
        }.bind(this)
      });
    },
    render: function() {
      return React.createElement('div', {className: 'container'},
               PJ.render_property('header', this.state),
               PJ.render_property('media', this.state),
               PJ.render_property('info', this.state),
               PJ.render_property('actions', this.state),
               PJ.render_property('footer', this.state)
             );
    }
  });

  PJ.register('index', Index);
})();
