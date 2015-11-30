(function() {
  var View = PJ.View,
      DoneeSupport = function(data) {
        var donee = data.data,
            get_route = data.get_route,
            next_donee_slug = data.next_donee_slug;
        return {
          button_list: View.button_list([{ style: "primary",
                                              link: "#/donate/" + donee.slug + "/support",
                                              title: "Facebook"
                                            },
                                            { style: "secondary",
                                              link: "#/donate/" + donee.slug + "/support",
                                              title: "Twitter"
                                            },
                                            { style: "secondary",
                                              link: "#/donate/" + donee.slug + "/support",
                                              title: "Email"
                                            }]),
          footer: View.footer("Donate", next_donee_slug, get_route),
          header: View.header("support" + donee.name, donee.subtitle)
        };
      };

  View.register('donee_support', DoneeSupport);
})();
