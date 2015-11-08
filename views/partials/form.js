(function() {
  var Form = React.createClass({
    handleSubmit: function (e) {
      e.preventDefault();

      var refs = this.refs,
          name = this.refs.name.getDOMNode().value ? ' ' + this.refs.name.getDOMNode().value : '';

      alert(this.props.message + name + ".");

      this.props.elements.forEach(function(element) {
        var ref = element.attributes.ref;

        //console.log(ref + ': ' + refs[ref].getDOMNode().value.trim());
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

      elements.forEach(function(element, index) {
        var attributes = $.extend({key: 'input-' + index}, element.attributes);
        children.push(React.createElement('input', attributes));
      });

      return React.createElement('form', null, 
               React.createElement('div', {className: 'form-container'},
                 children
               ),
               React.createElement('a', {onClick: this.handleCancel, className: "button clear grey center"}, "Clear"),
               React.createElement('a', {onClick: this.handleSubmit, className: "button submit blue center"}, "Signup")
             );
    }
  });

  PJ.register('form', Form);
})();
