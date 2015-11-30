(function() {
  var Donee = {
        find: function(slug) {
          return PJ.load_json('donee', slug)
                   .then(function(data) {
                     return data;
                   });
        }
      };

  PJ.Model.register('Donee', Donee);
})();
