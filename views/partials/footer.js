(function() {
  var View = PJ.View,
      Footer = function(name, get) {
        console.log(name);
        var names = ['FAQ', 'Donate', 'Volunteer', 'Join', 'Charities'],
            index = names.indexOf(name),
            spliced_name = names.splice(index, 1),
            mapped_names = names.map(function (item, i) {});
        return {
        };
      };

  View.register('footer', Footer);
})();
