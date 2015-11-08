(function() {
  var Form = React.createClass({
    handleSubmit: function (e) {
      e.preventDefault();
      console.log('Submitted', this.refs.name.getDOMNode().value.trim());
      console.log('Submitted', this.refs.email.getDOMNode().value.trim());
      console.log('Submitted', this.refs.phone.getDOMNode().value.trim());
    },
    handleCancel: function (e) {
      console.log("Cancel");
    },
    render: function() {
      var elements = this.props.elements,
          children = [];

      return React.createElement('form', null, 
               React.createElement('input', {type: "text", placeholder:"Your name", ref:"name"}),
               React.createElement('input', {type: "text", placeholder:"Email", ref:"email"}),
               React.createElement('input', {type: "text", placeholder:"Phone", ref:"phone"}),
               React.createElement('button', {onClick: this.handleCancel}, "Cancel"),
               React.createElement('button', {onClick: this.handleSubmit}, "Signup")
             );
    }
  });

  PJ.register('form', Form);
})();
