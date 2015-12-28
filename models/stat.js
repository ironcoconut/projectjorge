(function() {
  var Stat = {
        find: function() {
          return PJ.load_json('stats')
                   .then(function(data) {
                     return data;
                   });
        }
      };

  PJ.Model.register('Stat', Stat);
})();
