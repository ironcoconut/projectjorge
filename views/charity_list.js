PJ.View.register(
  'charity_list',
  function(data) {
    var charities = data.data,
        get_route = data.get_route,
        next_donee_slug = data.next_donee_slug,
        buttons = charities.map(function(charity, index) {
          return { 
            style: index % 2 == 0 ? "primary" : "secondary",
            link: get_route("charity_show", [charity.slug]),
            type: "link_button",
            title: charity.name,
            subtitle: charity.subtitle
          };
        });

    return {
      button_list: PJ.View.button_list(buttons),
      header: PJ.View.header("Charities", "who's helping to end homelessness")
    };
  }
);
