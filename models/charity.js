(function() {
  var Charity = {
        find: function(slug) {
          return PJ.load_json('charity', slug)
                   .then(function(data) {
                     return data;
                   });
        },
        create: function () {
          var save = this.save;
          return PJ.load_json('stats')
                   .then(function(data) {
                     return {
                       submit_function: save,
                       elements: PJ.Format.Charity,
                       next_donee_slug: data.data.next_donee_slug
                     };
                   });
        },
        save: function (data) {
          return PJ.save_json('charities', {charity: data}).then(function(charity) {
              alert("Thanks for signing up " + user.name + ".");
            },
            function() {
              alert('Something went wrong. :/');
            }
          );
        }
      };

  PJ.Model.register('Charity', Charity);
})();
