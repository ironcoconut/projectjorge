(function() {
  var Charity = function() {
        return {
          find: function(slug) {
            return PJ.load_json('charity', slug);
          }
        };
      };

  PJ.Model.register('Charity', Charity);
})();
