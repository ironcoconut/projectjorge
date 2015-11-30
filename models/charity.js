(function() {
  var Charity = {
        find: function(slug) {
          return PJ.load_json('charity', slug)
                   .then(function(data) {
                     return slug ?
                       data.data :
                       { charities: data.data };
                   });
        }
      };

  PJ.Model.register('Charity', Charity);
})();
