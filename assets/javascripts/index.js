import $ from 'jquery'
import 'popper.js'
import 'bootstrap'

$(document).on('click', '.topbar a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});