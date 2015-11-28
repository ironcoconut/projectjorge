(function() {
  var ParseUser = Parse.Object.extend("mailing_list_user"),
      User = {
        find: function(slug) {
          return PJ.load_json('job', slug);
        },
        create: function () {
          var save = this.save;
          return PJ.load_json('format', 'user-parse').done(function(data) {
            return {
              "submit_function": save,
              "elements": data.elemenets
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
        create_full: function () {
          return PJ.load_json('format', 'user').done(function(data) {
            return {
              "submit_function": function (data) {
                console.log('Saved data:', data);
              },
              "elements": data.elements
            };
          });
        }
      };

  PJ.Model.register('User', User);
})();
