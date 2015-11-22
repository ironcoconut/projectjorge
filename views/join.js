(function() {
  var View = PJ.View,
      Join = function(user) {
        var form_elements = user.elements;

        return {
          footer: View.footer("Join"),
          header: View.header("Create an Account", "share good will with humankind"),
          form: View.form(user.submit_function, "Thank you for joining", form_elements)
        };
      };

  View.register('join', Join);
})();
