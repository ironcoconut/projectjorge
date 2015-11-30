(function() {
  var ParseUser = Parse.Object.extend("mailing_list_user"),
      User = {
        find: function(slug) {
          return PJ.load_json('job', slug)
                   .then(function(data) {
                     return data.data;
                   });
        },
        create_parse: function () {
          var save = this.save;
          return PJ.load_json('format', 'user-parse').done(function(data) {
            return {
              "submit_function": save,
              "elements": data.elements
            };
          });
        },
        save: function (data) {
          var user = new ParseUser(data);

          return user.save().then(function(data) {
              alert("Thanks for signing up " + data.get('email') + ".");
            },
            function() {
              alert('Something went wrong. :/');
            }
          );
        },
        create: function () {
          return PJ.load_json('format', 'user').then(function(data) {
            return {
              submit_function: function (data) {
                return $.when(console.log('Saved data:', data));
              },
              elements: data.elements
            };
          });
        }
      };

  PJ.Model.register('User', User);
})();
