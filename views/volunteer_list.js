(function() {
  var View = PJ.View,
      VolunteerList = function(jobs) {
        var buttons = jobs.map(function(job, index) {
              return { 
                style: index % 2 == 0 ? "primary" : "secondary",
                link: "#/volunteer/" + job.charity_slug,
                title: job.title,
                subtitle: job.charity_name
              };
            });

        return {
          button_list: View.button_list(buttons),
          footer: View.footer("Volunteer"),
          header: View.header("Volunteer Positions", "lend a helping hand")
        };
      };

  View.register('volunteer_list', VolunteerList);
})();
