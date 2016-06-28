var map;
function initialize() {
 var Options = {
  center: new google.maps.LatLng(59.939027, 30.323065),
  zoom: 17,
  mapTypeId: google.maps.MapTypeId.ROADMAP
 };
    var map = new google.maps.Map(document.getElementById("map_canvas"), Options);
	
	var icon = "img/icon-map-marker.svg";

  	var location = new google.maps.LatLng(59.938794,30.323083);

  var mapMarker = new google.maps.Marker({
      position: location,
      map: map,
      icon: icon
  });
}
google.maps.event.addDomListener(window, 'load', initialize);