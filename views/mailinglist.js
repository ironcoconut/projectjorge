(function() {
  var View = PJ.View,
      Mailinglist = function(data) {
        var elements = data.elements,
            submit_function = data.submit_function,
            get_route = data.get_route,
            next_donee_slug = data.next_donee_slug,
            summary = "Let's end homelessness in Houston by Christmas 2016.",
            content = "<p><a href='https://ironcoconut.github.io/projectjorge/#/donate/jorge-bergoglio' target='_blank'>View the demo.</a></p><p><a href='https://github.com/ironcoconut/projectjorge' target='_blank'>Visit project github page.</a></p>",
            message = "Thank you for joining our mailing list.";

        return {
          footer: View.footer("Mailinglist", next_donee_slug, get_route),
          header: View.header("About Project Jorge"),
          media: View.media("https://www.youtube.com/embed/wthBxLda20M"),
          info: View.info(summary, content),
          form: View.form(submit_function, message, elements)
        };
      };

  View.register('mailinglist', Mailinglist);
})();
