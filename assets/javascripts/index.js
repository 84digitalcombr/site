import $ from 'jquery'
import 'popper.js'
import 'bootstrap'

$(document).on('click', '.anchor-link', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(document).on('show.bs.modal', '#modal-project', function (event) {
  var project = $(event.relatedTarget);
  var title = project.data('title');
  var description = project.data('description');
  var client = project.data('client');
  var image_path = project.data('image-path');

  var modal = $(this);
  modal.find('.project-title').text(title);
  modal.find('.project-description').text(description);
  modal.find('.project-image').attr('src', image_path);
});

$(document).on('submit', 'form[name=mc-embedded-subscribe-form]', function (event) {
    $('#mce-NAME').val('');
    $('#mce-EMAIL').val('');
    $('#mce-PHONE').val('');
    $('#mce-MESSAGE').val('');
});