(function() {
  var View = PJ.View,
      CharityVolunteer = function(job) {
        var form_elements = job.elements;

        return {
          footer: View.footer("Volunteer"),
          header: View.header(job.title, job.charity_name),
          info: View.info(job.summary, job.description),
          media: View.media(job.media_url),
          form: View.form(job.submit_function, "Thank you for volunteering", form_elements)
        };
      };

  View.register('charity_volunteer', CharityVolunteer);
})();
