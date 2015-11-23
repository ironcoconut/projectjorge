(function() {
  var Donee = function() {
        return {
          find: function(slug) {
            return PJ.load_json('donee', slug);
          }
        };
      };

  PJ.Model.register('Donee', Donee);
})();
