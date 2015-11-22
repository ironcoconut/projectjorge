(function() {
  var View = PJ.View,
      Header = function(title, subtitle) {
        return { 
          "title": title,
          "subtitle": subtitle
        };
      };

  View.register('header', Header);
})();
