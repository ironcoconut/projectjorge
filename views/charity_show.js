(function() {
  var View = PJ.View,
      CharityShow = function(charity) {
        var get_route = charity.get_route;

        return {
          button_list: View.button_list([{ style: "primary",
                                              link: get_route("charity_volunteer", 
                                                              [charity.slug]),
                                              title: "Volunteer"
                                            },
                                            { style: "default",
                                              link: get_route("charity_show",
                                                              [charity.next_charity_slug]),
                                              title: "Next"
                                            }]),
          footer: View.footer("Charities"),
          header: View.header(charity.name, charity.subtitle),
          info: View.info(charity.summary, charity.content),
          media: View.media(charity.media_url)
        };
      };

  View.register('charity_show', CharityShow);
})();
