PJ.View.register(
  'faq',
  function(data) {
    var stats = data.data,
        get_route = data.get_route,
        next_donee_slug = data.next_donee_slug,
        summary = "Inspired by the Pope, but human at it core.",
        content = "<p>Our goal is to end homelessness in Houston.</p><p>We will accomplish this by using techonology to bring people together.</p><p>By lifting up our fellow men and women, we shall together rise.</p>";

    return {
      button_list: PJ.View.button_list([{ style: "primary",
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
      header: PJ.View.header("FAQ", "about our mission and inspiration"),
      info: PJ.View.info(summary, content),
      media: PJ.View.media(stats.media_url)
    };
  }
);
