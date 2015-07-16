$(function() {
	/*$.get('../logos_footer.html', function(data) {
		$('footer').append(data);
	});*/
	$('footer .logos').load('logos_footer.html #maestrosdelweb');

	$.getJSON('../data/usuario.json', function(data) {
		var avatar = new Image();
		avatar.src = data.avatar;
		avatar.title = data.nombre + ' '  + data.apellido;
		$('#avatar').append(avatar);
	})
});

var base_url = 'http://query.yahooapis.com/v1/public/yql?';

function obtenerGeoInformacion(lat, lon) {
	var query = 'SELECT * FROM geo.placefinder WHERE text="' + lat + ', ' + lon + '" AND gflags="R"';
	query = encodeURIComponent(query);

	$.ajax({
		url: base_url + 'q=' + query,
		dataType: 'jsonp',
		jsonpCallback: 'procesarGeoInfo',
		data: {
			format: 'json'
		}
	});
}

function procesarGeoInfo(data) {
	var res 	= data.query.results.Result,
		barrio	= res.neighborhood,
		ciudad	= res.city,
		pais	= res.country,
		woeid	= res.woeid;

	$('#geo').prepend('<p><strong>' + barrio + '</strong><br>'+ ciudad + ', ' + pais + ' </p>')

	obtenerGeoClima(woeid);
}

function obtenerGeoClima(woeid) {
	var query = 'SELECT * FROM weather.forecast WHERE woeid="' + woeid + '" AND u="c"';
	query = encodeURIComponent(query);

	$.ajax({
		url: base_url + 'q=' + query,
		dataType: 'jsonp',
		jsonpCallback: 'procesarGeoClima',
		data: {
			format: 'json'
		}
	});
}

function procesarGeoClima(data) {
	var clima 	= data.query.results.channel,
		temp	= clima.item.condition.temp,
		unit	= clima.units.temperature,
		code	= clima.item.condition.code;
		img		= new Image();
		img.src	= 'http://l.yimg.com/a/i/us/we/52/' + code + '.gif';

	$('#clima')
		.append(img)
		.append('<p><strong>' + temp + ' ' + unit + 'º</strong></p>');
}