PJ.View.register(
  'charity_volunteer',
  function(data) {
    var job = data.data,
        get_route = data.get_route,
        next_donee_slug = data.next_donee_slug,
        form_elements = data.elements;

    return {
      footer: PJ.View.footer("Volunteer", next_donee_slug, get_route),
      header: PJ.View.header(job.title, job.charity_name),
      info: PJ.View.info(job.summary, job.description),
      media: PJ.View.media(job.media_url),
      form: PJ.View.form(data.submit_function, "Thank you for volunteering", form_elements)
    };
  }
);
