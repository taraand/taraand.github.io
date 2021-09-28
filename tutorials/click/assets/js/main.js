$(document).ready(function() {
    console.log("ready");

    $('div.button-img').click(function(red) {
        $('img').addClass('large');

    });

    $('div.button-font').click(function(red) {
        $('main').addClass(sans);
    });

    $('div.button-night').click(function(red) {
        $('main').addClass(night);
    });

    $('div.button-day').click(function(red) {
        $('main').addClass(day);
    });

});
   