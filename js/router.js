PJ.register(
  'Router', 
  {
    initialize: function(update_state) {
      var routing_table = {
            mailinglist: {
              path: '/mailinglist',
              model: PJ.Model.User.create_parse,
              view: PJ.View.mailinglist
            },
            donee_show: {
              path: '/donee/:slug',
              model: PJ.Model.Donee.find,
              view: PJ.View.donee_show
            },
            donee_support: {
              path: '/support/:slug',
              model: PJ.Model.Donee.find,
              view: PJ.View.donee_support
            },
            charity_create: {
              path: '/charities/create',
              model: PJ.Model.Charity.create,
              view: PJ.View.charity_create
            },
            charity_show: {
              path: '/charities/:slug',
              model: PJ.Model.Charity.find,
              view: PJ.View.charity_show
            },
            charities_list: {
              path: '/charities',
              model: PJ.Model.Charity.find,
              view: PJ.View.charity_list
            },
            charity_volunteer: {
              path: '/volunteer/:slug',
              model: PJ.Model.Volunteer.find,
              view: PJ.View.charity_volunteer
            },
            volunteer_list: {
              path: '/volunteer',
              model: PJ.Model.Volunteer.find,
              view: PJ.View.volunteer_list
            },
            join: {
              path: '/join',
              model: PJ.Model.User.create,
              view: PJ.View.join
            },
            faq: {
              path: '/faq',
              model: PJ.Model.Stat.find,
              view: PJ.View.faq
            },
            home: {
              path: '/',
              model: PJ.Model.Stat.find,
              view: PJ.View.faq
            }
          },
          processed = process_routing_table(),
          router = Router(processed.routes);

      router.init('/');

      function process_routing_table() {
        var routes = {},
            paths = {};

        for (var key in routing_table) {
          if(routing_table.hasOwnProperty(key)) {
            var model = routing_table[key].model,
                view  = routing_table[key].view,
                path  = routing_table[key].path;

            routes[path] = build_route_function(model, view);
            paths[key] = path;
          } 
        }

        return {
          routes: routes,
          paths: paths
        };
      };

      function build_route_function (model, view) {
        return function () {
          $.when(model.apply(null, arguments),
                 PJ.Model.Stat.find()
           )
           .then(function(data, stat) {
             var base_data = {
                   get_route: get_route, 
                   next_donee_slug: stat.data.donee_slug
                 },
                 view_data = view($.extend(base_data, data));

             update_state(view_data);
           })
        };
      };

      function get_route (key, data) {
        if (!processed.paths[key]) throw("No such route: "+key);

        var path = '#' + processed.paths[key],
            slugs = Array.isArray(data) ? data : [data];

        return slugs && slugs.length > 0 ?
          slugs.reduce(function(pre, cur) {
            return pre.replace(/(:\w+)/, cur);
          }, path) :
          path;
      };

      this.routes = processed.routes;
      this.paths = processed.paths;
      this.router = router;
    }
  }
);
