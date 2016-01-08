

var geo = navigator.geolocation;

function geo_ok(position){
	var lat  = position.coords.latitude;
	var lon  = position.coords.longitude;

	var mapa =new Image();
	mapa.src="http://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x400&sensor=false&center=" + lat +','+ lon;

	$('#geo').append(mapa);

}

function geo_error(error){
	console.log(error);
}

var options = {};

geo.getCurrentPosition(geo_ok,geo_error,options);