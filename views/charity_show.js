(function() {
  var View = PJ.View,
      CharityHome = function(charity) {
        return {
          button_list: View.button_list([{ style: "primary",
                                              link: "#/volunteer/" + charity.slug,
                                              title: "Volunteer"
                                            },
                                            { style: "default",
                                              link: "#/charities/" + charity.slug,
                                              title: "Next"
                                            }]),
          footer: View.footer("Charities"),
          header: View.header(charity.name, charity.subtitle),
          info: View.info(charity.summary, charity.content),
          media: View.media(charity.media_url)
        };
      };

  View.register('charity_home', CharityHome);
})();
