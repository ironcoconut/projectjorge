(function() {
  var View = PJ.View,
      DoneeSupport = function(donee) {
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
          footer: View.footer("Donate"),
          header: View.header("support" + donee.name, donee.subtitle)
        };
      };

  View.register('donee_support', DoneeSupport);
})();
