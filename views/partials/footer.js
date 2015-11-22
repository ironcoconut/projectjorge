(function() {
  var View = PJ.View,
      Footer = function(name) {
        return {
          "exclude": name
        };
      };

  View.register('footer', Footer);
})();
