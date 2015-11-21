(function() {
  var Form = React.createClass({
    handleSubmit: function (e) {
      e.preventDefault();

      var handleCancel = this.handleCancel,
          refs = this.refs,
          data = {};

      this.props.elements.forEach(function(element) {
        var prop = element.attributes.ref,
            value = refs[prop].getDOMNode().value.trim();

        data[prop] = value;
      });

      PJ.Model[this.props.submit_function](data).then(function(data) {
          handleCancel();
        }
      );
    },
    handleCancel: function (e) {
      if (e) {
        e.preventDefault();
      }

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
               React.createElement('a', {onClick: this.handleSubmit, className: "button primary center"}, "Signup"),
               React.createElement('a', {onClick: this.handleCancel, className: "button secondary center"}, "Clear Form")
             );
    }
  });

  PJ.Element.register('form', Form);
})();
