PJ.register(
  'Router', 
  {
    initialize: function(update_state) {
      var routing_table = {
            mailinglist: {
              path: '/mailinglist',
              menu: 'Mailinglist',
              model: PJ.Model.User.create_parse,
              view: PJ.View.mailinglist
            },
            donee_show: {
              path: '/donee/:slug',
              menu: 'Donate',
              model: PJ.Model.Donee.find,
              view: PJ.View.donee_show
            },
            donee_support: {
              path: '/support/:slug',
              menu: 'Donate',
              model: PJ.Model.Donee.find,
              view: PJ.View.donee_support
            },
            charity_create: {
              path: '/charities/create',
              menu: 'Charities',
              model: PJ.Model.Charity.create,
              view: PJ.View.charity_create
            },
            charity_show: {
              path: '/charities/:slug',
              menu: 'Charities',
              model: PJ.Model.Charity.find,
              view: PJ.View.charity_show
            },
            charities_list: {
              path: '/charities',
              menu: 'Charities',
              model: PJ.Model.Charity.find,
              view: PJ.View.charity_list
            },
            charity_volunteer: {
              path: '/volunteer/:slug',
              menu: 'Volunteer',
              model: PJ.Model.Volunteer.find,
              view: PJ.View.charity_volunteer
            },
            volunteer_list: {
              path: '/volunteer',
              menu: 'Volunteer',
              model: PJ.Model.Volunteer.find,
              view: PJ.View.volunteer_list
            },
            join: {
              path: '/join',
              menu: 'Join',
              model: PJ.Model.User.create,
              view: PJ.View.join
            },
            faq: {
              path: '/faq',
              menu: 'FAQ',
              model: PJ.Model.Stat.find,
              view: PJ.View.faq
            },
            settings: {
              path: '/settings',
              menu: 'Settings',
              model: PJ.Model.Stat.find,
              view: PJ.View.faq
            },
            home: {
              path: '/',
              menu: 'FAQ',
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
            var path  = routing_table[key].path;

            routes[path] = build_route_function(routing_table[key]);
            paths[key] = path;
          } 
        }

        return {
          routes: routes,
          paths: paths
        };
      };

      function build_route_function (route) {
        return function () {
          var model     = route.model,
              view      = route.view,
              menu_item = route.menu;

          $.when(model.apply(null, arguments),
                 PJ.Model.Stat.find()
           )
           .then(function(data, stat) {
             var view_data = view({ get_route: get_route, 
                                    next_donee_slug: stat.data.donee_slug,
                                    data: data.data }),
                 menu_data = PJ.View.menu(menu_item, stat.data.donee_slug, get_route),
                 footer_data = PJ.View.footer(menu_item, stat.data.donee_slug, get_route),
                 new_state = $.extend({menu: menu_data, footer: footer_data}, view_data);
             update_state(new_state);
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
