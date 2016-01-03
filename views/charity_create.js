PJ.View.register('charity_create', function(data) {
  var View = PJ.View,
      form_elements = data.elements,
      submit_function = data.submit_function,
      get_route = data.get_route,
      next_donee_slug = data.next_donee_slug;

  return {
    footer: View.footer("Charity", next_donee_slug, get_route),
    header: View.header("Create a New Charity"),
    form: View.form(submit_function, "Submit", form_elements)
  };
});
