(function() {
  var View = PJ.View,
      DoneeShow = function(donee) {
        return {
          button_list: View.button_list([{ style: "primary",
                                              title: "Donate",
                                              subtitle: donee.raised + " of " + donee.goal + " per month raised"
                                            },
                                            { style: "secondary",
                                              link: "#/donate/" + donee.slug + "/support",
                                              title: "Support",
                                              subtitle: "Share " + donee.first_name + "'s story"
                                            },
                                            { style: "default",
                                              link: "#/donate/" + donee.next_slug,
                                              title: "Skip"
                                            }]),
          footer: View.footer("Donate"),
          header: View.header("meet " + donee.name, donee.subtitle),
          info: View.info(donee.summary, donee.content),
          media: View.media(donee.media_url)
        };
      };

  View.register('donee_show', DoneeShow);
})();
