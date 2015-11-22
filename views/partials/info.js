(function() {
  var View = PJ.View,
      Info = function(summary, content) {
        return { 
          summary: summary,
          content: content
        };
      };

  View.register('info', Info);
})();
