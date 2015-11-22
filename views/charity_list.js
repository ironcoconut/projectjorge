(function() {
  var View = PJ.View,
      CharityList = function(charities) {
        var buttons = charities.map(function(charity, index) {
              return { 
                style: index % 2 == 0 ? "primary" : "secondary",
                link: "#/charities/" + charity.slug,
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
