(function() {
  var User = function() {
        var ParseUser = Parse.Object.extend("mailing_list_user");
        return {
          create: function () {
            return {
              "submit_function": this.save,
              "elements": [
                {
                  "label": "email",
                  "type": "text",
                  "placeholder": "join our mailing list",
                  "ref": "email"
                }
              ]
            };
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
            return {
              "submit_function": function (data) {
                console.log('Saved data:', data);
              },
              "elements": [
                {
                  "label": "Your full name",
                  "type": "text",
                  "placeholder": "Name",
                  "ref": "name"
                },
                {
                  "label": "Password",
                  "type": "text",
                  "placeholder": "Password",
                  "ref": "password"
                },
                {
                  "label": "Your email address.",
                  "type": "text", 
                  "placeholder": "Email", 
                  "ref": "email"
                },
                {
                  "label": "Your phone number.",
                  "type": "text", 
                  "placeholder": "Phone", 
                  "ref": "phone"
                },
                {
                  "label": "Link to your Facebook.",
                  "type": "text", 
                  "placeholder": "Facebook", 
                  "ref": "facebook"
                },
                {
                  "label": "Link to your Twitter.",
                  "type": "text", 
                  "placeholder": "Twitter", 
                  "ref": "twitter"
                }
              ]
            };
          }
        };
      };

  PJ.Model.register('User', User);
})();
