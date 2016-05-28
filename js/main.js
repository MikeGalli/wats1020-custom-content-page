$(document).on('ready', function(){
  $('#button-spy').affix({
  });
  //$(".button_container").css('width, 20')

  	jQuery('#a-link').remove();
  	jQuery('<img alt="" />').attr('id', 'loader').attr('src', 'ajax-loader.gif').appendTo('#image-container');
  	//assign your api key equal to a variable
  	var apiKey = '35edbca3494716bac72f7f2719ccb167';
  	//the initial json request to flickr
  	//to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&amp;method=flickr.people.getPublicPhotos&amp;api_key=' + apiKey + '&amp;user_id=29096781@N02&amp;per_page=15&amp;page=2&amp;format=json&amp;jsoncallback=?
  	$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=72157668420144852&user_id=141199663@N04&extras=url_m&format=json&jsoncallback=?')
      .done(function( data ){

        console.log("received data");
        $.each( data.photoset.photo, function( i, item ) {
          var newListItem = $("#masonry");
          console.log(data);
          //var newTitle = $('<p class="image-title">').html(item.title).appendTo(newListItem);
          //var newDate = $('<p class="image-date">').text(item.date_taken).appendTo(newListItem);
    //      var tmp = '<img src="https://www.flickr.com/photos/141199663@N04/' + photo.id + '" class="image-description">';
          //var newDescription = $('<img src="https://www.flickr.com/photos/141199663@N04/' + photo.id + '" class="image-description">').html(photo.title).appendTo(newListItem);
          var newDescription = $(' <img src="' + item.url_m+'">').appendTo(newListItem);
          //var newDescription = $(url_m).html(photo.title).appendTo(newListItem);
          //var newLink = $('<a>').attr('href', item.link).text('View on Flickr.').appendTo(newListItem);
          newListItem.appendTo("#masonry");
          //if ( i === 15 ) {
        //    return false;
        //};
        });
      });
});
