(function() {
  var View = PJ.View,
      CharityList = function(data) {
        var charities = data.charities,
            get_route = data.get_route,
            buttons = charities.map(function(charity, index) {
              return { 
                style: index % 2 == 0 ? "primary" : "secondary",
                link: get_route("charity_show", [charity.slug]),
                type: "link_button",
                title: charity.name,
                subtitle: charity.subtitle
              };
            });

        return {
          button_list: View.button_list(buttons),
          footer: View.footer("Charities"),
          header: View.header("Charities", "who's helping to end homelessness")
        };
      };

  View.register('charity_list', CharityList);
})();
