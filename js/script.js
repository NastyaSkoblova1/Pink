function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(59.9363535,30.3193163),
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById('navigation'),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(59.9363535,30.3193163);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}
google.maps.event.addDomListener(window, 'load', initialize);   

$(document).ready(function(){
  $('.bxslider').bxSlider();
  }); 

var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
}