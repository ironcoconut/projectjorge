(function() {
  var View = PJ.View,
      CharityShow = function(data) {
        var charity = data.data,
            get_route = data.get_route,
            next_donee_slug = data.next_donee_slug;

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
          footer: View.footer("Charities", next_donee_slug, get_route),
          header: View.header(charity.name, charity.subtitle),
          info: View.info(charity.summary, charity.content),
          media: View.media(charity.media_url)
        };
      };

  View.register('charity_show', CharityShow);
})();
