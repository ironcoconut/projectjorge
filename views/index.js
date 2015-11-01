(function() {
  var Index = React.createClass({
    componentDidMount: function() {
      var load_json = this.load_json,
          router = Router({
            '/': load_json.bind(this, "mock_data/donee.json"),
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
          console.log('data: ', data);
          this.setState(data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    render: function() {
      return React.createElement('div', {className: 'container'},
               PJ.render('header', this.state),
               PJ.render('media', this.state),
               PJ.render('info', this.state),
               PJ.render('actions', this.state),
               PJ.render('footer', this.state)
             );
    }
  });

  PJ.register('index', Index);
})();
