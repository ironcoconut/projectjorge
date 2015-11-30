(function() {
  var View = PJ.View,
      Faq = function(stats) {
        var get_route = stats.get_route,
            summary = "Inspired by the Pope, but human at it core.",
            content = "<p>Our goal is to end homelessness in Houston.</p><p>We will accomplish this by using techonology to bring people together.</p><p>By lifting up our fellow men and women, we shall together rise.</p>";

        return {
          button_list: View.button_list([{ style: "primary",
                                           link : get_route('donee_show', 
                                                            [stats.donee_slug]),
                                           title: "Help Your Neighbors",
                                           subtitle: stats.total_donees + " Homeless in Houston need help."
                                         },
                                         { style: "secondary",
                                           link: get_route('charities_list'),
                                           title: "Help Local Charities",
                                           subtitle: stats.total_charities + " Houston Charities Need Volunteers."
                                         }]),
          footer: View.footer("FAQ"),
          header: View.header("FAQ", "about our mission and inspiration"),
          info: View.info(summary, content),
          media: View.media(stats.media_url)
        };
      };

  View.register('faq', Faq);
})();
