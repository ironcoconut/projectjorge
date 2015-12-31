PJ.Element.register(
  'more_info', 
  React.createClass({
    render: function () {
      var attributes = {
                         className: this.props.show ? '' : 'hidden', 
                         dangerouslySetInnerHTML: set_html(this.props.content)
                       };

      function set_html (content) {
        return {__html: content};
      }

      return React.createElement('div', attributes);
    }
  })
);
