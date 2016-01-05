PJ.View.register(
  'donee_show',
  function(data) {
    var donee = data.data,
        get_route = data.get_route,
        next_donee_slug = data.next_donee_slug,
        get = data.get_route;

    return [
      PJ.View.header("meet " + donee.name, donee.subtitle),
      PJ.View.media(donee.media_url),
      PJ.View.info(donee.summary, donee.content),
      PJ.View.button_list([{ style: "primary",
                                       title: "Donate",
                                       type: "payment_button",
                                       subtitle: donee.raised + " of " + donee.goal + " per month raised"
                                     },
                                     { style: "secondary",
                                       link: get('donee_support', donee.slug),
                                       title: "Support",
                                       subtitle: "Share " + donee.first_name + "'s story"
                                     },
                                     { style: "default",
                                       link: get('donee_show', donee.next_slug),
                                       title: "Skip"
                                     }])
    ];
  }
);
