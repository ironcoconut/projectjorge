(function() {
  var Job = function() {
        return {
          find: function(slug) {
            return PJ.load_json('job', slug);
          }
        };
      };

  PJ.Model.register('Job', Job);
})();
