PJ.View.register(
  'form', 
  function(fn, msg, elements) {
    var mapped_elements = elements.map(function(element) {
          var label       = element.label       || "",
              type        = element.type        || "text",
              placeholder = element.placeholder || "",
              ref         = element.ref         || "";

          return {
            "label": label,
            "attributes": {
              "type": type,
              "placeholder": placeholder,
              "ref": ref
            }
          };
        });

    return {
      "submit_function": fn,
      "message": msg,
      "elements": mapped_elements
    };
  }
);
