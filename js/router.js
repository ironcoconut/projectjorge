(function() {
  var update_state = null,
      routing_table = {
        mailinglist: {
          path: '/mailinglist',
          handler: function () {
            PJ.Model.User.create_parse()
              .then(PJ.View.mailinglist)
              .done(update_state);
          }
        },
        donee_show: {
          path: '/donee/:slug',
          handler: function(slug) {
            PJ.Model.Donee.find(slug)
              .then(PJ.View.donee_show)
              .done(update_state);
          }
        },
        donee_support: {
          path: '/support/:slug',
          handler: function(slug) {
            PJ.Model.Donee.find(slug)
              .then(PJ.View.donee_support)
              .done(update_state);
          }
        },
        charity_show: {
          path: '/charities/:slug',
          handler: function(slug) {
            PJ.Model.Charity.find(slug)
              .then(PJ.View.charity_show)
              .done(update_state);
          }
        },
        charities_list: {
          path: '/charities/',
          handler: function() {
            PJ.Model.Charity.find()
              .then(PJ.View.charity_list)
              .done(update_state);
          }
        },
        charity_volunteer: {
          path: '/volunteer/:charity_slug/:volunteer_slug',
          handler: function(charity_slug, volunteer_slug) {
            PJ.Model.Volunteer.find(charity_slug, volunteer_slug)
              .then(PJ.View.charity_volunteer)
              .done(update_state);
          }
        },
        volunteer_list: {
          path: '/volunteer',
          handler: function() {
            PJ.Model.Volunteer.find()
              .then(PJ.View.volunteer_list)
              .done(update_state);
          }
        },
        join: {
          path: '/join',
          handler: function() {
            PJ.Model.User.create()
              .then(PJ.View.join)
              .done(update_state);
          }
        },
        faq: {
          path: '/faq',
          handler: function() {
            PJ.Model.Stat.find()
              .then(PJ.View.faq)
              .done(update_state);
          }
        },
        home: {
          path: '/',
          handler: function() {
            PJ.Model.Stat.find()
              .then(PJ.View.faq)
              .done(update_state);
          }
        }
      },
      TheRouter = {
        initialize: function(UpdateState) {
          update_state = function(data) {
            console.log(data);
            UpdateState(data);
          };
          var processed = process_routing_table();
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

  PJ.register('Router', TheRouter);
})();
