(function() {
  var Charity = {
        find: function(slug) {
          return PJ.load_json('charity', slug)
                   .then(function(data) {
                     return data.data;
                   });
        }
      };

  PJ.Model.register('Charity', Charity);
})();
