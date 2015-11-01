(function() {
  var Index = React.createClass({
    componentDidMount: function() {
      var load_json = this.load_json,
          router = Router({
            '/': load_json.bind(this, "mock_data/donee.json"),
            '/volunteer': load_json.bind(this, "mock_data/volunteer.json"),
            '/charities': load_json.bind(this, "mock_data/charity.json"),
            '/join': load_json.bind(this, "mock_data/join.json"),
            '/faq': load_json.bind(this, "mock_data/faq.json")
          });
      router.init('/');
    },
    load_json: function (url) {
      $.ajax({
        url: url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.replaceState(data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
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
