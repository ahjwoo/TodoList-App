// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  $('#button').on('click', function(event){
    event.preventDefault();

  $('.image-slider').empty();

    
    var input = $('#inputarea').val();
    var api_key = '906d24753a8a0da2e4e65975271d61cc';
    var link = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + api_key + "&tags=" + input + "&format=json";

    $.ajax({  
      url: link,
      jsonp: 'jsoncallback',
      dataType: 'jsonp',
      success: function(data) {
        // console.log(data);
        
        for (var i = 0; i < 10; i++) {
        var id = data.photos.photo[i].id;
        var secret = data.photos.photo[i].secret;
        var server = data.photos.photo[i].server;
        var farm = data.photos.photo[i].farm;

        var imageUrl = "http://farm" + farm + ".static.flickr.com/" + server + "/" + id + "_" + secret + ".jpg";

        $('.image-slider').append('<img src=' + imageUrl + '>');
        }

        //Slick, an easy to integrate carousel.
        $('.image-slider').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
        });
      }
    });
  });
});

