(function() {
  var Donee = {
        find: function(slug) {
          return PJ.load_json('donee', slug);
        }
      };

  PJ.Model.register('Donee', Donee);
})();
