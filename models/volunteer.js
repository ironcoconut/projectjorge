(function() {
  var Volunteer = {
        find: function(charity_slug, volunteer_slug) {
          return PJ.load_json('volunteer', charity_slug + '/' + volunteer_slug);
        }
      };

  PJ.Model.register('Volunteer', Volunteer);
})();
