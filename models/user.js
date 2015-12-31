(function() {
  var ParseUser = Parse.Object.extend("mailing_list_user"),
      User = {
        find: function(slug) {
          return PJ.load_json('job', slug)
                   .then(function(data) {
                     return data;
                   });
        },
        create_parse: function () {
          var save_parse = this.save_parse;
          return PJ.load_json('stat')
                   .then(function(data, format) {
                     return {
                       submit_function: save_parse,
                       elements: PJ.Format.UserParse,
                       next_donee_slug: data.next_donee_slug
                     };
                   });
        },
        save_parse: function (data) {
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
          var save = this.save;

          return {
            submit_function: save,
            elements: PJ.Format.User
          };
        },
        save: function (data) {
          return PJ.save_json('users', {user: data}).then(function(user) {
              alert("Thanks for signing up " + user.name + ".");
            },
            function() {
              alert('Something went wrong. :/');
            }
          );
        }
      };

  PJ.Model.register('User', User);
})();
