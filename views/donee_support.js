PJ.View.register(
  'donee_support',
  function(data) {
    var donee = data.data,
        get_route = data.get_route,
        next_donee_slug = data.next_donee_slug;
    return {
      button_list: PJ.View.button_list([{ style: "primary",
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
      header: PJ.View.header("support" + donee.name, donee.subtitle)
    };
  }
);
