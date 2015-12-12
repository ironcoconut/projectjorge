(function() {
  var View = PJ.View,
      CharityVolunteer = function(data) {
        var job = data.data,
            get_route = data.get_route,
            next_donee_slug = data.next_donee_slug,
            form_elements = data.elements;

        return {
          footer: View.footer("Volunteer", next_donee_slug, get_route),
          header: View.header(job.title, job.charity_name),
          info: View.info(job.summary, job.description),
          media: View.media(job.media_url),
          form: View.form(data.submit_function, "Thank you for volunteering", form_elements)
        };
      };

  View.register('charity_volunteer', CharityVolunteer);
})();
