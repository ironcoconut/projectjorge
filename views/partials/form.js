(function() {
  var Form = React.createClass({
    handleSubmit: function (e) {
      e.preventDefault();

      var refs = this.refs;

      console.log('Submit: ' + this.props.submit_url);

      this.props.elements.forEach(function(element) {
        var ref = element.attributes.ref;

        console.log(ref + ': ' + refs[ref].getDOMNode().value.trim());
      });
    },
    handleCancel: function (e) {
      e.preventDefault();

      var refs = this.refs;

      this.props.elements.forEach(function(element) {
        var ref = element.attributes.ref,
            placeholder = element.attributes.placeholder;

        refs[ref].getDOMNode().value = null;
      });
    },
    render: function() {
      var elements = this.props.elements,
          children = [];

      elements.forEach(function(element) {
        children.push(React.createElement('input', element.attributes));
        children.push(React.createElement('small', null, element.label));
      });

      return React.createElement('form', null, 
               children,
               React.createElement('button', {onClick: this.handleCancel}, "Cancel"),
               React.createElement('button', {onClick: this.handleSubmit}, "Signup")
             );
    }
  });

  PJ.register('form', Form);
})();
