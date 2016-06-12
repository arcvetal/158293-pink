var map;
function initialize() {
 var Options = {
  center: new google.maps.LatLng(59.939027, 30.323065),
  zoom: 17,
  mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 map = new google.maps.Map(document.getElementById("map_canvas"), Options);
}
google.maps.event.addDomListener(window, 'load', initialize);