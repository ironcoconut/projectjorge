PJ.View.register(
  'button_list', 
  function(buttons) {
    var mapped_buttons = buttons.map(function(button) {
          var style    = button.style    || "primary",
              link     = button.link     || "#",
              type     = button.type     || "link_button",
              title    = button.title    || "",
              subtitle = button.subtitle || "";

          return {
            "attributes": {
              "className": "center button " + style,
              "href": link
            },
            "type": type,
            "title": title,
            "subtitle": subtitle
          };
        });

    return { "buttons": mapped_buttons};
  }
);
