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
          var save = this.save;
          return $.when(PJ.load_json('stat'), 
                        PJ.load_json('format', 'user-parse'))
                  .then(function(data, format) {
                    return {
                      submit_function: save,
                      elements: format[0].elements,
                      next_donee_slug: data[0].next_donee_slug
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
          return $.when(PJ.load_json('stat'), 
                        PJ.load_json('format', 'user'))
                  .then(function(data, format) {
                    return {
                      submit_function: function (data) {
                        return $.when(console.log('Saved data:', data));
                      },
                      elements: format[0].elements,
                      next_donee_slug: data[0].next_donee_slug
                    };
          });
        }
      };

  PJ.Model.register('User', User);
})();
