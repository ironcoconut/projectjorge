var PJ = {
  elements: {},
  register: function(name, element) {
    if (this.elements[name]) throw "Element already exists: " + name;
    this.elements[name] = element;
  },
  render_app: function() {
    Parse.initialize("7gKwKXIqeZm2mJpSgzzt0oYMNF9zwjzBr2YKVRN6", "H0MHpFwR7ksEPxCeuAqNQnK7dzXKVJOeKySLbiNb");
    this.mailing_list_user = Parse.Object.extend("mailing_list_user");
    React.render(
      React.createElement(PJ.elements['index']), 
      document.getElementById("bodycontainer")
    );
  },
  render_element: function(name) {
    return React.createElement(this.elements[name]);
  },
  render_property: function(name, object, key) {
    if (!key) key = name;
    return object && object[name] ? 
      React.createElement(this.elements[name], $.extend({key: key}, object[name])) : 
      null;
  },
  render_object: function(name, object, key) {
    return object ? 
      React.createElement(this.elements[name], $.extend({key: key}, object)) : 
      null;
  },
  save_email: function(data) {
    var mailing_list_user = new this.mailing_list_user(data);
    return mailing_list_user.save().then(function(data) {
          alert("Thanks for signing up " + data.get('email') + ".");
        },
        function() {
          alert('Something went wrong. :/');
        }
      );
  }
};
