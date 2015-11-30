(function() {
  var Volunteer = {
        find: function(slug) {
          return slug ?
            load_slug(this.save, slug) :
            load_show();
        },
        save: function(data) {
          return $.when(console.log('save:', data));
        }
      };

  function load_slug(save, slug) {
    return $.when(PJ.load_json('volunteer', slug), 
                  PJ.load_json('format', 'volunteer'))
            .then(function(data, format) {
              return $.extend( { elements: format[0].elements,
                                 submit_function: save
                               }, data[0].data);
            }, function(err) {
              console.log('err:', err.state());
            });
  };

  function load_show() {
    return PJ.load_json('volunteer').then(function(data) {
      return { positions: data.data };
    });
  };
  
  PJ.Model.register('Volunteer', Volunteer);
})();
