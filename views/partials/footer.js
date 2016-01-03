PJ.View.register(
  'footer', 
  function(name, next_donee, get) {
    var paths = {
          'FAQ': get('faq'), 
          'Donate': get('donee_show', next_donee), 
          'Volunteer': get('volunteer_list'), 
          'Join': get('join'), 
          'Charities': get('charities_list')
        },
        items = ['FAQ', 'Donate', 'Volunteer', 'Join', 'Charities'],
        name_arr = [];

    items.forEach(function(item){
      if (item != name) {
        name_arr.push({label: item, path: paths[item]});
      }
    });

    return { items: name_arr };
  }
);
