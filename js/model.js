PJ.register(
  'Model',
  {
    register: function (name, singular, plural) {
      if (this[name]) throw "Element already exists: " + name;

      function find (slug) {
        return PJ.load_json(plural, slug).then(function(data) {
          return data;
        });
      };
      function create () {
        return {
          submit_function: save,
          elements: PJ.Format[name]
        };
      };
      function save (data) {
        console.log('save', data);
        var save_data = {};
        save_data[singular] = data;
        return PJ.save_json(plural, save_data).then(function(data) {
                 return data;
               }, function () {
                 console.log('Error:', arguments);
               });
      };

      this[name] = {
        find: find,
        create: create,
        save: save
      };
    }
  }
);
