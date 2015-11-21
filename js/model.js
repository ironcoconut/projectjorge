(function() {
  var Model = (function() {
    return {
      initialize: function() {
        Parse.initialize("7gKwKXIqeZm2mJpSgzzt0oYMNF9zwjzBr2YKVRN6", "H0MHpFwR7ksEPxCeuAqNQnK7dzXKVJOeKySLbiNb");
        this.mailing_list_user = Parse.Object.extend("mailing_list_user");
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
    }
  }());

  PJ.register('Model', Model);
})();
