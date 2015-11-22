(function() {
  var View = PJ.View,
      Media = function(url) {
        return { 
          url: url
        };
      };

  View.register('media', Media);
})();
