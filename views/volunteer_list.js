PJ.View.register(
  'volunteer_list',
  function(data) {
    var positions = data.data,
        next_donee_slug = data.next_donee_slug,
        get_route = data.get_route;

    var buttons = positions.map(function(position, index) {
          return { 
            style: index % 2 == 0 ? "primary" : "secondary",
            link: get_route("charity_volunteer", position.charity_slug),
            title: position.title,
            subtitle: position.charity_name
          };
        });

    return {
      button_list: PJ.View.button_list(buttons),
      header: PJ.View.header("Volunteer Positions", "lend a helping hand")
    };
  }
);
