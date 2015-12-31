(function() {
  var View = PJ.View,
      Join = function(data) {
        var form_elements = data.elements,
            submit_function = data.submit_function,
            get_route = data.get_route,
            next_donee_slug = data.next_donee_slug;

        return {
          footer: View.footer("Join", next_donee_slug, get_route),
          header: View.header("Create an Account", "share good will with humankind"),
          form: View.form(submit_function, "Thank you for joining", form_elements)
        };
      };

  View.register('join', Join);
})();
