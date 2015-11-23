(function() {
  var Model = (function() {
    return {
      register: function(name, element) {
        if (this[name]) throw "Element already exists: " + name;
        this[name] = element;
      },
      initialize: function() {
        Parse.initialize("7gKwKXIqeZm2mJpSgzzt0oYMNF9zwjzBr2YKVRN6", "H0MHpFwR7ksEPxCeuAqNQnK7dzXKVJOeKySLbiNb");
      }
    }
  }());

  PJ.register('Model', Model);
})();
