Donee.Media = React.createClass({
  resizeIframe: function() {
    var height = $('.media').width() * (9/16);

    $('.media').css({'height': height + 'px'});
  },
  componentDidMount: function() {
    this.resizeIframe();

    window.addEventListener('resize', this.resizeIframe);
  },
  render: function() {
    return (
      <div >
        <iframe className="media" width="100%" src="https://www.youtube.com/embed/40yYoQBkKpY" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
});
