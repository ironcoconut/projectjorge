(function() {
  var update_state = null,
      get_route = null,
      routing_table = {
        mailinglist: {
          path: '/mailinglist',
          handler: function () {
            PJ.Model.User.create_parse()
              .then(add_get_route)
              .then(PJ.View.mailinglist)
              .done(update_state);
          }
        },
        donee_show: {
          path: '/donee/:slug',
          handler: function(slug) {
            PJ.Model.Donee.find(slug)
              .then(add_get_route)
              .then(PJ.View.donee_show)
              .done(update_state);
          }
        },
        donee_support: {
          path: '/support/:slug',
          handler: function(slug) {
            PJ.Model.Donee.find(slug)
              .then(add_get_route)
              .then(PJ.View.donee_support)
              .done(update_state);
          }
        },
        charity_create: {
          path: '/charities/create',
          handler: function() {
            PJ.Model.Charity.create()
              .then(add_get_route)
              .then(PJ.View.charity_create)
              .done(update_state);
          }
        },
        charity_show: {
          path: '/charities/:slug',
          handler: function(slug) {
            PJ.Model.Charity.find(slug)
              .then(add_get_route)
              .then(PJ.View.charity_show)
              .done(update_state);
          }
        },
        charities_list: {
          path: '/charities',
          handler: function() {
            PJ.Model.Charity.find()
              .then(add_get_route)
              .then(PJ.View.charity_list)
              .done(update_state);
          }
        },
        charity_volunteer: {
          path: '/volunteer/:slug',
          handler: function(slug) {
            PJ.Model.Volunteer.find(slug)
              .then(add_get_route)
              .then(PJ.View.charity_volunteer)
              .done(update_state);
          }
        },
        volunteer_list: {
          path: '/volunteer',
          handler: function() {
            PJ.Model.Volunteer.find()
              .then(add_get_route)
              .then(PJ.View.volunteer_list)
              .done(update_state);
          }
        },
        join: {
          path: '/join',
          handler: function() {
            PJ.Model.User.create()
              .then(add_get_route)
              .then(PJ.View.join)
              .done(update_state);
          }
        },
        faq: {
          path: '/faq',
          handler: function() {
            PJ.Model.Stat.find()
              .then(add_get_route)
              .then(PJ.View.faq)
              .done(update_state);
          }
        },
        home: {
          path: '/',
          handler: function() {
            PJ.Model.Stat.find()
              .then(add_get_route)
              .then(PJ.View.faq)
              .done(update_state);
          }
        }
      },
      TheRouter = {
        initialize: function(UpdateState) {
          var processed = process_routing_table();

          get_route = function(key, data) {
            if (!processed.paths[key]) throw("No such route: "+key);

            var path = '#' + processed.paths[key],
                slugs = Array.isArray(data) ? data : [data];

            return slugs && slugs.length > 0 ?
              slugs.reduce(function(pre, cur) {
                return pre.replace(/(:\w+)/, cur);
              }, path) :
              path;
          };

          update_state = function(data) {
            UpdateState(data);
          };

          this.routes = processed.routes;
          this.paths = processed.paths;
          this.router = Router(this.routes);
          this.router.init('/');
        }
      };

  function process_routing_table() {
    var routes = {},
        paths = {};

    for (var key in routing_table) {
      if(routing_table.hasOwnProperty(key)) {
        var handler = routing_table[key].handler,
            path    = routing_table[key].path;
        routes[path] = handler;
        paths[key] = path;
      } 
    }

    return {
      routes: routes,
      paths: paths
    };
  };

  function add_get_route(data) {
    return $.extend({get_route: get_route}, data);
  };

  PJ.register('Router', TheRouter);
})();
