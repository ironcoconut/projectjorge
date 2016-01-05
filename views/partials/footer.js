PJ.View.register(
  'footer', 
  function(name, next_donee, get) {
    var paths = {
          'FAQ': get('faq'), 
          'Charities': get('charities_list')
        },
        items = ['FAQ', 'Charities'],
        name_arr = [];

    items.forEach(function(item){
      var data = (item === name) ? {label: item} : {label: item, path: paths[item]};
      name_arr.push(data);
    });

    return { items: name_arr };
  }
);
