PJ.View.register(
  'join',
  function(data) {
    var form_elements = data.elements,
        submit_function = data.submit_function,
        get_route = data.get_route,
        next_donee_slug = data.next_donee_slug;

    return [
      PJ.View.header("Create an Account", "share good will with humankind"),
      PJ.View.form(submit_function, "Thank you for joining", form_elements)
    ];
  }
);
