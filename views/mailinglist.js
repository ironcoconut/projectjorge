(function() {
  var View = PJ.View,
      Mailinglist = function(user) {
        var form_elements = [
              {
                "label": "Your full name",
                "placeholder": "Name",
                "ref": "name"
              }
            ],
            summary = "Pope Francis is right. Let us use technology to end homelessness in Houston.",
            content = "<p><a href='https://ironcoconut.github.io/projectjorge/#/donate/jorge-bergoglio' target='_blank'>View the demo.</a></p><p><a href='https://github.com/ironcoconut/projectjorge' target='_blank'>Visit project github page.</a></p>",
            message = "Thank you for joining our mailing list.";

        return {
          footer: View.footer("Mailinglist"),
          header: View.header("My Inspiration"),
          media: View.media("https://www.youtube.com/embed/6WhLwWNnf3o"),
          info: View.info(summary, content),
          form: View.form(user.submit_function, message, model.elements)
        };
      };

  View.register('mailinglist', Mailinglist);
})();
