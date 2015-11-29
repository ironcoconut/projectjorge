(function() {
  var Volunteer = {
        find: function(charity_slug, volunteer_slug) {
          return PJ.load_json('volunteer', charity_slug + '/' + volunteer_slug)
                   .then(function(data) {
                     return data.data;
                   });
        }
      };

  PJ.Model.register('Volunteer', Volunteer);
})();
