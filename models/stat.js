(function() {
  var Stat = {
        find: function() {
          return PJ.load_json('stat');
        }
      };

  PJ.Model.register('Stat', Stat);
})();
