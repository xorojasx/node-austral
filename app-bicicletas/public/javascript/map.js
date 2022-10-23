var map = L.map("main-map").setView(
	[-33.448922542593145, -70.64473916312011],
	13
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//L.marker([-33.4484106629084, -70.64208674232113]).addTo(map);

$.ajax({
	dataType: "json",
	url: "api/bicicletas",
	success: function (result) {
		console.log(result);
		result.bicicletas.forEach(function (bici) {
			L.marker(bici.ubicacion, { title: bici.id }).addTo(map);
		});
	},
});
