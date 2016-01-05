PJ.View.register(
  'charity_volunteer',
  function(data) {
    var job = data.data,
        get_route = data.get_route,
        next_donee_slug = data.next_donee_slug,
        form_elements = data.elements;

    return [
      PJ.View.header(job.title, job.charity_name),
      PJ.View.media(job.media_url),
      PJ.View.info(job.summary, job.description),
      PJ.View.form(data.submit_function, "Thank you for volunteering", form_elements)
    ];
  }
);
