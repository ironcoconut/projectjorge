(function() { 
  var Media = React.createClass({
    resizeIframe: function() {
      var height = $('.media').width() * (9/16);

      $('.media').css({'height': height + 'px'});
    },
    componentDidMount: function() {
      this.resizeIframe();

      window.addEventListener('resize', this.resizeIframe);
    },
    render: function() {
      return React.createElement('div', null,
               React.createElement('iframe', {className: "media", width: "100%", src: this.props.url, frameBorder: "0", allowFullScreen: true})
             );
    }
  });

  PJ.register('media', Media);
})();
