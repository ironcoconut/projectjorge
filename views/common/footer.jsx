var Footer = React.createClass({
  render: function() {
    var exclude = this.props.data.exclude,
        items = ['FAQ', 'Support', 'Volunteer', 'Join', 'Charities'],
        html = [];
    
    items.forEach(function (item) {
      if (exclude != item) {
        html.push("<a href='#/" + item.toLowerCase() + "'>" + item + "</a>");
      }
    });
    
        console.log(html);
    function set_html () {
      return {__html: html.join('<span> - </span>')};
    }

    return (
      <div className="footer" dangerouslySetInnerHTML={set_html()} />
    );
  }
});
