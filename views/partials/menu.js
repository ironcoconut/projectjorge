PJ.View.register(
  'menu', 
  function(active_item, next_donee, get) {
    var paths = {
          'Donate': get('donee_show', next_donee), 
          'Volunteer': get('volunteer_list'),
          'Settings': get('settings'),
        },
        items = ['Donate', 'Volunteer', 'Settings'].map(function(item) {
          if (active_item === item) {
            return {
              "li_attributes": {
                className: "active", 
                key: item
              },
              label: item
            };
          } else {
            return {
              "a_attributes": {
                "href": paths[item]
              },
              "li_attributes": {
                key: item
              },
              label: item
            };
          }
        });

    return { items: items };
  }
);
