(function() {
  var = Stat = function() {
        return {
          find: function() {
            return PJ.load_json('stat');
            /*
            return {
              total_donees: 8,
              total_charities: 5,
              media_url: "https://www.youtube.com/embed/6WhLwWNnf3o"
            };
            */
          }
        };
      };

  PJ.Model.register('Stat', Stat);
})();
